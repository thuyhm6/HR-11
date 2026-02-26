package com.ait.sy.sys.service.impl;

import com.ait.sy.sys.dto.MenuDTO;
import com.ait.sy.sys.mapper.MenuMapper;
import com.ait.sy.sys.service.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * MenuServiceImpl - Implementation của MenuService
 */
@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuMapper menuMapper;

    @Override
    public List<MenuDTO> getMenusByUserPermission(String userNo) {
        if (userNo == null || userNo.trim().isEmpty()) {
            return new ArrayList<>();
        }

        // Lấy tất cả menu có quyền
        List<MenuDTO> allMenus = menuMapper.getMenusByUserPermission(userNo);

        // Xây dựng cây menu có phân cấp
        return buildMenuTree(allMenus);
    }

    @Override
    public List<MenuDTO> getRootMenusByUserPermission(String userNo) {
        if (userNo == null || userNo.trim().isEmpty()) {
            return new ArrayList<>();
        }

        // Lấy menu gốc
        List<MenuDTO> rootMenus = menuMapper.getRootMenusByUserPermission(userNo);

        // Xây dựng cây menu con cho từng menu gốc
        for (MenuDTO rootMenu : rootMenus) {
            rootMenu.setChildren(getChildMenus(rootMenu.getMenuNo(), userNo));
        }

        return rootMenus;
    }

    @Override
    public List<MenuDTO> getMenusByUserPermissionWithLanguage(String userNo, String language) {
        if (userNo == null || userNo.trim().isEmpty()) {
            return new ArrayList<>();
        }

        // Sử dụng ngôn ngữ mặc định nếu không có
        if (language == null || language.trim().isEmpty()) {
            language = "vi";
        }

        // Lấy tất cả menu có quyền với ngôn ngữ cụ thể
        List<MenuDTO> allMenus = menuMapper.getMenusByUserPermissionWithLanguage(userNo, language);

        // Xây dựng cây menu có phân cấp
        return buildMenuTree(allMenus);
    }

    /**
     * Xây dựng cây menu có phân cấp
     * 
     * @param allMenus Tất cả menu
     * @return Danh sách menu gốc có phân cấp
     */
    private List<MenuDTO> buildMenuTree(List<MenuDTO> allMenus) {
        List<MenuDTO> rootMenus = new ArrayList<>();

        // Tìm menu gốc
        for (MenuDTO menu : allMenus) {
            if (menu.isRootMenu()) {
                rootMenus.add(menu);
            }
        }

        // Xây dựng cây con cho từng menu gốc
        for (MenuDTO rootMenu : rootMenus) {
            buildChildren(rootMenu, allMenus);
        }

        return rootMenus;
    }

    /**
     * Xây dựng menu con cho menu cha
     * 
     * @param parentMenu Menu cha
     * @param allMenus   Tất cả menu
     */
    private void buildChildren(MenuDTO parentMenu, List<MenuDTO> allMenus) {
        List<MenuDTO> children = new ArrayList<>();

        for (MenuDTO menu : allMenus) {
            if (parentMenu.getMenuNo().equals(menu.getMenuParentNo())) {
                children.add(menu);
                // Đệ quy xây dựng menu con của menu con
                buildChildren(menu, allMenus);
            }
        }

        parentMenu.setChildren(children);
    }

    /**
     * Lấy menu con theo menu cha
     * 
     * @param parentMenuNo Mã menu cha
     * @param userNo       Mã người dùng
     * @return Danh sách menu con
     */
    private List<MenuDTO> getChildMenus(String parentMenuNo, String userNo) {
        List<MenuDTO> childMenus = menuMapper.getChildMenusByUserPermission(userNo, parentMenuNo);

        // Đệ quy xây dựng menu con của menu con
        for (MenuDTO childMenu : childMenus) {
            childMenu.setChildren(getChildMenus(childMenu.getMenuNo(), userNo));
        }

        return childMenus;
    }
}
