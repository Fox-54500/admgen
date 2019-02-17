// ---------------- Created By: Adm Generator
angular.module('adminPanel').controller('$YourModules$Controller', ['$scope', '$filter', 'instance', '_', '$http', 'toastr', 'Dialog',
    function ($scope, $filter, instance, _, $http, toastr, Dialog) {
        /* ---------------------------------- 方法 ---------------------------------- */
        // 查询
        $scope.search = function () {
            $scope.params.pages = $scope.currentPage + ':' + $scope.itemsPerPage;
            // $scope.loading = true;
            // let data = angular.copy($scope.params);
            // 处理需要上传的日期
            // if (data.enlist_start_time) {
            //     data.enlist_start_time = moment(data.enlist_start_time).format('YYYY-MM-DD HH:mm:ss')
            // }
            // $http.post('/Api/$YourModules$/adm-get-list', data)
            //     .success(function (res) {
            //         $scope.loading = false;
            //         if (res.result) {
            //             $scope.listItems = res.data;
            //             $scope.listItems.map(function (item) {
            //                 $scope.idList.push(item.id);
            //             });
            //             $scope.dataCount = res.count;
            //         } else {
            //             toastr.error(res.msg)
            //         }
            //     })
            //     .error(function (err) {
            //         $scope.loading = false;
            //         toastr.error(err);
            //     });
            $scope.listItems = [
                {id: 1, name: 1, value: 1, type: 1, result: 1},
                {id: 2, name: 2, value: 2, type: 2, result: 2},
                {id: 3, name: 3, value: 3, type: 3, result: 3},
                {id: 4, name: 4, value: 4, type: 4, result: 4},
                {id: 5, name: 5, value: 5, type: 5, result: 5},
                {id: 6, name: 6, value: 6, type: 6, result: 6},
            ];
            $scope.listItems.map(function (item) {
                $scope.idList.push(item.id);
            });
            $scope.dataCount = $scope.listItems.length;
        };

        // 新增
        $scope.create = function (isEdit, item) {
            let query = {
                isEdit,
            };
            if (item) {
                query.item = angular.copy(item);
            }
            let controller = '/$YourModules$/Create$YourModules$Controller.js';
            let view = '/$YourModules$/Create$YourModules$.html';
            let ctrlName = 'Create$YourModules$Controller';
            let size = 3;
            let viewOrder = Dialog.showDialog(controller, view, ctrlName, size);
            viewOrder(query)
                .then((res) => {
                    $scope.search();
                })
        };

        // 获取运营中心
        $scope.showInstitution = function () {
            Dialog.showInstitutionList({})
                .then(function (res) {
                    let parentId = res.selected_store.id;
                    let parentName = res.selected_store.name;
                });
        };

        // 获取所属机构
        $scope.showStore = function () {
            Dialog.showStoreList()
                .then((res) => {
                    let storeId = res.list.id;
                    let storeName = res.list.name;
                })
        };

        // 获取人员列表
        $scope.showStaffList = function () {
            Dialog.showStaffList()
                .then((res) => {
                    let staffId = res.id;
                    let staffName = res.name;
                });
        };

        // 重置参数并更新
        $scope.resetParams = function () {
            $scope.params = {};
            $scope.search();
        };

        // checkbox 按钮编辑
        $scope.edit = function () {
            let id = 0, length = 0;
            for (let key in $scope.idGroup) {
                if ($scope.idGroup[key]) {
                    id = key;
                    length++;
                }
            }
            if (length != 1) {
                toastr.error('当选中一个才能编辑');
                return;
            }
            let item = {};
            $scope.listItems.map(function (camp) {
                if (camp.id == id) {
                    item = angular.copy(camp);
                }
            });
            $scope.create(true, item);
        };

        $scope.toggleAll = function () {
            if ($scope.isAll) {
                $scope.idList.map(function (id) {
                    $scope.idGroup[id] = true;
                })
            } else {
                $scope.idGroup = {};
            }
        };
        /* ---------------------------------- 初始 ---------------------------------- */
        $scope.currentPage = '1';
        $scope.itemsPerPage = '20';
        $scope.loading = false;
        $scope.listItems = [];
        $scope.idGroup = {};
        $scope.isAll = false;
        $scope.idList = [];
        /* ---------------------------------- 手动执行 ------------------------------ */
        $scope.resetParams();
    }
]);

