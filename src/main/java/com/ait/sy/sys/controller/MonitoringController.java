package com.ait.sy.sys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ait.sy.sys.service.HealthCheckService;
import com.ait.sy.sys.service.LoggingService;
import com.ait.sy.sys.service.MetricsService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * MonitoringController - REST endpoints cho monitoring và logging
 */
@RestController
@RequestMapping("/api/monitoring")
public class MonitoringController {

    @Autowired
    private HealthCheckService healthCheckService;

    @Autowired
    private MetricsService metricsService;

    @Autowired
    private LoggingService loggingService;

    /**
     * Health check endpoint
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> getHealth() {
        Map<String, Object> response = new HashMap<>();

        try {
            HealthCheckService.HealthStatus overallHealth = healthCheckService.getOverallHealth();
            Map<String, HealthCheckService.HealthStatus> allChecks = healthCheckService.getAllHealthChecks();

            response.put("status", overallHealth.getStatus());
            response.put("description", overallHealth.getDescription());
            response.put("checks", allChecks);
            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("status", "DOWN");
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Detailed health check endpoint
     */
    @GetMapping("/health/detailed")
    public ResponseEntity<Map<String, Object>> getDetailedHealth() {
        Map<String, Object> response = new HashMap<>();

        try {
            if (healthCheckService instanceof com.ait.sy.sys.service.impl.HealthCheckServiceImpl) {
                com.ait.sy.sys.service.impl.HealthCheckServiceImpl impl = (com.ait.sy.sys.service.impl.HealthCheckServiceImpl) healthCheckService;

                Map<String, HealthCheckService.HealthResult> detailedChecks = impl.getDetailedHealthChecks();
                response.put("detailedChecks", detailedChecks);
            }

            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Metrics snapshot endpoint
     */
    @GetMapping("/metrics")
    public ResponseEntity<Map<String, Object>> getMetrics() {
        Map<String, Object> response = new HashMap<>();

        try {
            Map<String, Object> metrics = metricsService.getMetricsSnapshot();
            response.put("metrics", metrics);
            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Metrics by category endpoint
     */
    @GetMapping("/metrics/{category}")
    public ResponseEntity<Map<String, Object>> getMetricsByCategory(@PathVariable String category) {
        Map<String, Object> response = new HashMap<>();

        try {
            Map<String, Object> metrics = metricsService.getMetricsByCategory(category);
            response.put("category", category);
            response.put("metrics", metrics);
            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Top slow operations endpoint
     */
    @GetMapping("/metrics/slow-operations")
    public ResponseEntity<Map<String, Object>> getSlowOperations(
            @RequestParam(defaultValue = "10") int limit) {
        Map<String, Object> response = new HashMap<>();

        try {
            List<MetricsService.OperationMetric> slowOps = metricsService.getTopSlowOperations(limit);
            response.put("slowOperations", slowOps);
            response.put("limit", limit);
            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Error rates endpoint
     */
    @GetMapping("/metrics/error-rates")
    public ResponseEntity<Map<String, Object>> getErrorRates() {
        Map<String, Object> response = new HashMap<>();

        try {
            Map<String, Double> errorRates = metricsService.getErrorRates();
            response.put("errorRates", errorRates);
            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Throughput metrics endpoint
     */
    @GetMapping("/metrics/throughput")
    public ResponseEntity<Map<String, Object>> getThroughputMetrics() {
        Map<String, Object> response = new HashMap<>();

        try {
            Map<String, Double> throughput = metricsService.getThroughputMetrics();
            response.put("throughput", throughput);
            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Export metrics endpoint
     */
    @PostMapping("/metrics/export")
    public ResponseEntity<Map<String, Object>> exportMetrics() {
        Map<String, Object> response = new HashMap<>();

        try {
            metricsService.exportMetrics();
            response.put("message", "Metrics exported successfully");
            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Clear metrics endpoint
     */
    @DeleteMapping("/metrics")
    public ResponseEntity<Map<String, Object>> clearMetrics() {
        Map<String, Object> response = new HashMap<>();

        try {
            metricsService.clearMetrics();
            response.put("message", "Metrics cleared successfully");
            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Log test event endpoint
     */
    @PostMapping("/logging/test")
    public ResponseEntity<Map<String, Object>> logTestEvent(
            @RequestParam String eventType,
            @RequestParam String message,
            @RequestBody(required = false) Map<String, Object> context) {

        Map<String, Object> response = new HashMap<>();

        try {
            // Validate event type
            try {
                LoggingService.EventType.valueOf(eventType.toUpperCase());
            } catch (IllegalArgumentException e) {
                // Use default event type
            }

            loggingService.logEvent(eventType, message, context);

            response.put("message", "Test event logged successfully");
            response.put("eventType", eventType);
            response.put("correlationId", loggingService.getCorrelationId());
            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * Dashboard data endpoint
     */
    @GetMapping("/api/dashboard/data")
    public ResponseEntity<Map<String, Object>> getDashboardData() {
        Map<String, Object> response = new HashMap<>();

        try {
            // Health status
            HealthCheckService.HealthStatus overallHealth = healthCheckService.getOverallHealth();
            response.put("healthStatus", overallHealth.getStatus());

            // Key metrics
            Map<String, Object> applicationMetrics = metricsService.getMetricsByCategory("application");
            response.put("applicationMetrics", applicationMetrics);

            // Error rates
            Map<String, Double> errorRates = metricsService.getErrorRates();
            response.put("errorRates", errorRates);

            // Throughput
            Map<String, Double> throughput = metricsService.getThroughputMetrics();
            response.put("throughput", throughput);

            // Top slow operations
            List<MetricsService.OperationMetric> slowOps = metricsService.getTopSlowOperations(5);
            response.put("topSlowOperations", slowOps);

            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }

    /**
     * System info endpoint
     */
    @GetMapping("/system/info")
    public ResponseEntity<Map<String, Object>> getSystemInfo() {
        Map<String, Object> response = new HashMap<>();

        try {
            Runtime runtime = Runtime.getRuntime();

            response.put("javaVersion", System.getProperty("java.version"));
            response.put("javaVendor", System.getProperty("java.vendor"));
            response.put("osName", System.getProperty("os.name"));
            response.put("osVersion", System.getProperty("os.version"));
            response.put("osArchitecture", System.getProperty("os.arch"));
            response.put("availableProcessors", runtime.availableProcessors());
            response.put("maxMemory", runtime.maxMemory());
            response.put("totalMemory", runtime.totalMemory());
            response.put("freeMemory", runtime.freeMemory());
            response.put("usedMemory", runtime.totalMemory() - runtime.freeMemory());

            response.put("timestamp", System.currentTimeMillis());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("timestamp", System.currentTimeMillis());
            return ResponseEntity.status(500).body(response);
        }
    }
}
