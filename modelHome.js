$(document).ready(function () {
    var viewModel =
        {
            firstName: ko.observable("Gabriel")
            , lastName: ko.observable("Morais")
            , capitalizeLastName: function () {
                var tempLastName = this.lastName();
                var tempName = this.firstName();
                this.lastName(tempLastName.toUpperCase());
                this.firstName(tempName.toUpperCase());
            }
            , desCapitalizeLastName: function () {
                var tempLastName = this.lastName();
                var tempName = this.firstName();
                this.lastName(tempLastName.toLowerCase());
                this.firstName(tempName.toLowerCase());
            }
        };

    viewModel.fullName = ko.dependentObservable(function () {
        return this.firstName() + " " + this.lastName();
    }, viewModel);

    // Ativando knockout.js
    ko.applyBindings(viewModel);
});