// ---------------- Created By: Adm Generator
var service = [
    '$scope',
    '$rootScope',
    '$http',
    'params',
    'toastr',
    'Dialog',
]
angular.module('adminPanel').controller('Create$YourModules$Controller', [...service,
    function ($scope, $rootScope, $http, params, toastr, Dialog) {
        // ---------------------------------- 方法 ----------------------------------
        // 提交
        $scope.save = function () {
            $scope.loading = true;
            // 拷贝一份需要上传的参数，避免因为需要调整参数导致不可二次上传
            let data = angular.copy($scope.addParams);
            // 处理需要上传的日期
            // if (data.enlist_start_time) {
            //     data.enlist_start_time = moment(data.enlist_start_time).format('YYYY-MM-DD HH:mm:ss')
            // }
            data.action = $scope.isEdit ? 'edit' : 'new';
            let url = `/Api/$YourModules$/adm-${data.action}-`;
            $http.post(url, data)
                .success(function (res) {
                    $scope.loading = false;
                    if (res.result) {
                        $scope.confirm();
                        let tips = $scope.isEdit ? '编辑' : '添加';
                        toastr.success(tips + '成功')
                    } else {
                        toastr.error(res.msg);
                    }
                })
                .error((err) => {
                    $scope.loading = false;
                    console.log(err)
                });
        };

        // 关闭窗口
        $scope.cancel = function () {
            $scope.closeThisDialog(0);
        };
        // 获取运营中心
        $scope.showInstitution = function () {
            Dialog.showInstitutionList({})
                .then(function (res) {
                    let parentId = res.selected_store.id;
                    let parentName = res.selected_store.name;
                    let parentGid = res.selected_store.gid;
                });
        };

        // 获取所属机构
        $scope.selectStore = function () {
            Dialog.showStoreList({
                type: 'multiSelect',
                // last_select: $scope.storeList
            })
                .then((res) => {
                    $scope.storeList = res;
                })
        };

        // ---------------------------------- 初始 ----------------------------------
        $scope.loading = false;
        $scope.addParams = {};
        $scope.isEdit = params.isEdit;
        if ($scope.isEdit) {
        }
        // ---------------------------------- 手动执行 ------------------------------
    }]);
