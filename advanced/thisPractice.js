let form = document.querySelector("form");
const userManager = {
    users : [],
    init : function (){
        form.addEventListener("submit",this.submitForm.bind(this));
    },
    submitForm: function (e){
e.preventDefault();
this.users.push({
    
})
    },
    addUser : function () {},
    removeUser : function () {},
};
userManager.init();