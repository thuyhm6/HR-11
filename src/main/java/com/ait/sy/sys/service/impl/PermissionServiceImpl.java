package com.ait.sy.sys.service.impl;

import com.ait.sy.basicMaintenance.mapper.SyMenuMapper;
import com.ait.sy.basicMaintenance.model.SyMenu;
import com.ait.sy.syRole.mapper.SyRoleGroupMapper;
import com.ait.sy.syRole.mapper.SyRoleMapper;
import com.ait.sy.syRole.mapper.SyRoleRelationMapper;
import com.ait.sy.syRole.mapper.SyUserRelationMapper;
import com.ait.sy.syRole.model.SyRole;
import com.ait.sy.syRole.model.SyRoleGroup;
import com.ait.sy.syRole.model.SyUserRelation;
import com.ait.sy.sys.service.PermissionService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.stream.Collectors;

/**
 * PermissionServiceImpl - Implementation của PermissionService
 * Xử lý phân quyền và menu cho hệ thống HR
 */
@Service
@Transactional
public class PermissionServiceImpl implements PermissionService {

    private static final Logger logger = LoggerFactory.getLogger(PermissionServiceImpl.class);

    @Autowired
    private SyUserRelationMapper syUserRelationMapper;

    @Autowired
    private SyRoleGroupMapper syRoleGroupMapper;

    @Autowired
    private SyRoleMapper syRoleMapper;

    @Autowired
    private SyMenuMapper syMenuMapper;

    @Autowired
    private SyRoleRelationMapper syRoleRelationMapper;

    @Override
    @Cacheable(value = "userPermissions", key = "#userNo + '_roleGroups'")
    public List<SyRoleGroup> getUserRoleGroups(String userNo) {
        try {
            logger.debug("Getting role groups for user: {}", userNo);

            // Lấy danh sách user relations
            List<SyUserRelation> userRelations = syUserRelationMapper.findActiveByUserNo(userNo);

            // Lấy thông tin role groups
            List<SyRoleGroup> roleGroups = userRelations.stream()
                    .map(relation -> syRoleGroupMapper.findByRoleGroupNo(relation.getRoleGroupNo()))
                    .filter(roleGroup -> roleGroup != null && roleGroup.isActive())
                    .collect(Collectors.toList());

            logger.debug("Found {} role groups for user: {}", roleGroups.size(), userNo);
            return roleGroups;

        } catch (Exception e) {
            logger.error("Error getting role groups for user {}: {}", userNo, e.getMessage(), e);
            throw new RuntimeException("Lỗi lấy role groups của user: " + e.getMessage(), e);
        }
    }

    @Override
    @Cacheable(value = "userPermissions", key = "#userNo + '_roles'")
    public List<SyRole> getUserRoles(String userNo) {
        try {
            logger.debug("Getting roles for user: {}", userNo);

            // Lấy danh sách role groups của user
            List<SyRoleGroup> roleGroups = getUserRoleGroups(userNo);

            // Lấy tất cả roles từ các role groups
            List<SyRole> roles = roleGroups.stream()
                    .flatMap(roleGroup -> syRoleMapper.findByRoleGroupNo(roleGroup.getRoleGroupNo()).stream())
                    .filter(role -> role != null && role.isActive())
                    .distinct()
                    .collect(Collectors.toList());

            logger.debug("Found {} roles for user: {}", roles.size(), userNo);
            return roles;

        } catch (Exception e) {
            logger.error("Error getting roles for user {}: {}", userNo, e.getMessage(), e);
            throw new RuntimeException("Lỗi lấy roles của user: " + e.getMessage(), e);
        }
    }

    @Override
    @Cacheable(value = "menuCache", key = "#userNo + '_menus'")
    public List<SyMenu> getUserMenus(String userNo) {
        try {
            logger.debug("Getting menus for user: {}", userNo);
            List<SyMenu> menus = syMenuMapper.findMenuTreeByUserNo(userNo);
            logger.debug("Found {} menus for user: {}", menus.size(), userNo);
            return menus;
        } catch (Exception e) {
            logger.error("Error getting menus for user {}: {}", userNo, e.getMessage(), e);
            throw new RuntimeException("Lỗi lấy menus của user: " + e.getMessage(), e);
        }
    }

    @Override
    @Cacheable(value = "menuCache", key = "#userNo + '_menuTree'")
    public List<SyMenu> getUserMenuTree(String userNo) {
        try {
            logger.debug("Getting menu tree for user: {}", userNo);
            List<SyMenu> menuTree = syMenuMapper.findMenuTreeByUserNo(userNo);
            logger.debug("Found {} menu items in tree for user: {}", menuTree.size(), userNo);
            return menuTree;
        } catch (Exception e) {
            logger.error("Error getting menu tree for user {}: {}", userNo, e.getMessage(), e);
            throw new RuntimeException("Lỗi lấy menu tree của user: " + e.getMessage(), e);
        }
    }

    @Override
    public boolean hasMenuPermission(String userNo, String menuNo) {
        try {
            // Lấy danh sách roles của user
            List<SyRole> roles = getUserRoles(userNo);

            // Kiểm tra từng role có quyền trên menu không
            return roles.stream()
                    .anyMatch(role -> syRoleRelationMapper.hasPermission(role.getRoleNo(), menuNo));

        } catch (Exception e) {
            throw new RuntimeException("Lỗi kiểm tra quyền menu: " + e.getMessage(), e);
        }
    }

    @Override
    public boolean hasSelectPermission(String userNo, String menuNo) {
        try {
            List<SyRole> roles = getUserRoles(userNo);
            return roles.stream()
                    .anyMatch(role -> syRoleRelationMapper.hasSelectPermission(role.getRoleNo(), menuNo));

        } catch (Exception e) {
            throw new RuntimeException("Lỗi kiểm tra quyền SELECT: " + e.getMessage(), e);
        }
    }

    @Override
    public boolean hasInsertPermission(String userNo, String menuNo) {
        try {
            List<SyRole> roles = getUserRoles(userNo);
            return roles.stream()
                    .anyMatch(role -> syRoleRelationMapper.hasInsertPermission(role.getRoleNo(), menuNo));

        } catch (Exception e) {
            throw new RuntimeException("Lỗi kiểm tra quyền INSERT: " + e.getMessage(), e);
        }
    }

    @Override
    public boolean hasUpdatePermission(String userNo, String menuNo) {
        try {
            List<SyRole> roles = getUserRoles(userNo);
            return roles.stream()
                    .anyMatch(role -> syRoleRelationMapper.hasUpdatePermission(role.getRoleNo(), menuNo));

        } catch (Exception e) {
            throw new RuntimeException("Lỗi kiểm tra quyền UPDATE: " + e.getMessage(), e);
        }
    }

    @Override
    public boolean hasDeletePermission(String userNo, String menuNo) {
        try {
            List<SyRole> roles = getUserRoles(userNo);
            return roles.stream()
                    .anyMatch(role -> syRoleRelationMapper.hasDeletePermission(role.getRoleNo(), menuNo));

        } catch (Exception e) {
            throw new RuntimeException("Lỗi kiểm tra quyền DELETE: " + e.getMessage(), e);
        }
    }

    @Override
    @Cacheable(value = "userPermissions", key = "#userNo + '_permissionInfo'")
    public PermissionService.UserPermissionInfo getUserPermissionInfo(String userNo) {
        try {
            logger.debug("Getting permission info for user: {}", userNo);

            // Lấy thông tin phân quyền
            List<SyRoleGroup> roleGroups = getUserRoleGroups(userNo);
            List<SyRole> roles = getUserRoles(userNo);
            List<SyMenu> menus = getUserMenus(userNo);

            // Tạm thời để null cho hrUserInfo, có thể cải thiện sau
            HrUserInfo hrUserInfo = null;

            PermissionService.UserPermissionInfo permissionInfo = new PermissionService.UserPermissionInfo(userNo,
                    roleGroups, roles, menus, hrUserInfo);

            logger.debug("Built permission info for user: {} with {} role groups, {} roles, {} menus",
                    userNo, roleGroups.size(), roles.size(), menus.size());

            return permissionInfo;

        } catch (Exception e) {
            logger.error("Error getting permission info for user {}: {}", userNo, e.getMessage(), e);
            throw new RuntimeException("Lỗi lấy thông tin phân quyền: " + e.getMessage(), e);
        }
    }

    /**
     * Clear cache for a specific user when permissions are updated
     */
    @CacheEvict(value = { "userPermissions", "menuCache" }, key = "#userNo + '*', allEntries = false")
    public void clearUserCache(String userNo) {
        logger.info("Clearing cache for user: {}", userNo);
    }

    /**
     * Clear all permission caches (use with caution)
     */
    @CacheEvict(value = { "userPermissions", "menuCache" }, allEntries = true)
    public void clearAllPermissionCache() {
        logger.warn("Clearing all permission caches");
    }
}
