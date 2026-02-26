/**
 * Employee Search Modal - Reusable Component
 * Usage: EmployeeSearchModal.open(callback)
 * Updated to use DataTables for pagination and scrolling
 */

window.EmployeeSearchModal = {
    // Configuration
    config: {
        apiUrl: '/hrm/empinfo/api/employee/search',
        modalId: '#employeeSearchModal',
        tableId: '#employeeSearchTable',
        searchForm: {
            empId: '#popupSearchEmpId',
            localName: '#popupSearchLocalName',
            deptNo: '#popupSearchDeptNo'
        }
    },

    // Current callback function
    currentCallback: null,
    dataTable: null,

    // Open modal with callback
    open(callback) {
        this.currentCallback = callback;
        this.clear();
        $(this.config.modalId).modal('show');

        // Adjust DataTable columns when modal is shown (fix width issues)
        $(this.config.modalId).off('shown.bs.modal').on('shown.bs.modal', () => {
            if (this.dataTable) {
                this.dataTable.columns.adjust().draw();
            }
        });

        this.search();
    },

    // Clear search form
    clear() {
        $(this.config.searchForm.empId).val('');
        $(this.config.searchForm.localName).val('');
        $(this.config.searchForm.deptNo).val('');
        if (this.dataTable) {
            this.dataTable.clear().draw();
        }
    },

    // Initialize DataTable
    initDataTable() {
        if ($.fn.DataTable.isDataTable(this.config.tableId)) {
            this.dataTable = $(this.config.tableId).DataTable();
            return;
        }

        this.dataTable = $(this.config.tableId).DataTable({
            paging: true,
            searching: false, // Use custom search fields
            info: true,
            lengthChange: false,
            pageLength: 10,
            scrollY: '50vh', // Limit height to 50% of viewport height
            scrollCollapse: true,
            destroy: true, // Allow re-init
            language: {
                url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json"
            },
            columns: [
                {
                    data: null,
                    render: function (data, type, row, meta) {
                        return meta.row + 1;
                    }
                },
                { data: 'empId', defaultContent: '' },
                { data: 'localName', defaultContent: '' },
                { data: 'deptNo', defaultContent: '' },
                { data: 'position', defaultContent: '' }
            ],
            createdRow: function (row, data, dataIndex) {
                $(row).css('cursor', 'pointer');
                $(row).off('click').on('click', function () {
                    window.EmployeeSearchModal.selectEmployee(
                        data.personId,
                        data.empId,
                        data.localName,
                        data.deptNo,
                        data.position
                    );
                });
            }
        });
    },

    // Search employees
    search() {
        const searchData = {
            empId: $(this.config.searchForm.empId).val().trim(),
            localName: $(this.config.searchForm.localName).val().trim(),
            deptNo: $(this.config.searchForm.deptNo).val().trim()
        };

        $.ajax({
            url: this.config.apiUrl,
            type: 'GET',
            data: searchData,
            success: (response) => {
                this.populateTable(response);
            },
            error: (xhr, status, error) => {
                console.error('Error searching employees:', error);
                this.showError('Lỗi khi tìm kiếm nhân viên: ' + error);
            }
        });
    },

    // Populate table with search results
    populateTable(employees) {
        if (!this.dataTable) {
            this.initDataTable();
        }
        this.dataTable.clear().rows.add(employees).draw();
    },

    // Select employee and call callback
    selectEmployee(personId, empId, localName, deptNo, position) {
        const employee = {
            personId: personId,
            empId: empId,
            localName: localName,
            deptNo: deptNo,
            position: position
        };

        if (this.currentCallback && typeof this.currentCallback === 'function') {
            this.currentCallback(employee);
        }

        $(this.config.modalId).modal('hide');
        this.showSuccess('Đã chọn nhân viên: ' + empId);
    },

    // Show success message
    showSuccess(message) {
        if (typeof showSuccessMessage === 'function') {
            showSuccessMessage(message);
        } else if (typeof toastr !== 'undefined') {
            toastr.success(message);
        }
    },

    // Show error message
    showError(message) {
        if (typeof showErrorMessage === 'function') {
            showErrorMessage(message);
        } else if (typeof toastr !== 'undefined') {
            toastr.error(message);
        }
    },

    updateConfig(newConfig) {
        Object.assign(this.config, newConfig);
    },

    getConfig() {
        return this.config;
    }
};

// Legacy functions
window.openEmployeeSearchModal = function (callback) {
    EmployeeSearchModal.open(callback);
};

window.clearEmployeeSearch = function () {
    EmployeeSearchModal.clear();
};

window.searchEmployees = function () {
    EmployeeSearchModal.search();
};

window.populateEmployeeTable = function (employees) {
    EmployeeSearchModal.populateTable(employees);
};

window.selectEmployee = function (personId, empId, localName, deptNo, position) {
    EmployeeSearchModal.selectEmployee(personId, empId, localName, deptNo, position);
};
