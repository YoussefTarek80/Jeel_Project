<template>
    <router-view></router-view>
</template>
<script>

export default{
    data(){
        return{
            Signedup:[
                {
                    email:'youssef.tarek1090@gmail.com',
                    password:"password",
                    role:"Admin"
                },
                {
                    email:'student@example.com',
                    password:"studentpassword",
                    role:"Student" 
                }
            ],
           Lists:[
                {
                    id:1,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"الدول",
                    to:'/dashboard/countries'
                },
                {
                    id:2,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"المسارات",
                    to:'/dashboard/pathes'
                },
                {
                    id:3,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"الفيديوهات",
                    to:''
                },
                {
                    id:4,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"بنك الاسءله",
                    to:''
                },
                {
                    id:5,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"التمارين",
                    to:''
                },
                {
                    id:6,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"اوراق العمل",
                    to:''
                },
                {
                    id:7,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"المهام",
                    to:''
                },
                {
                    id:8,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"المراحل",
                    to:''
                },
            ],
            
            SchoolList:[
                {
                    id:1,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"مجموعه المدارس",
                    to:''
                },
                {
                    id:2,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"قائمه المدارس",
                    to:''
                },
                {
                    id:3,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"قائمه المراحل الدراسيه",
                    to:''
                },
                {
                    id:4,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"الفصول الدراسيه",
                    to:''
                },
                {
                    id:5,
                    img:'http://jeel.suredemos.com/img/list-steps.cb2e9b12.svg',
                    title:"الصفوف الدراسيه",
                    to:''
                }
            ],
            countriesList:[],
            PathesList:[
                {
                    id:1,
                    name:'path1'
                }
            ],
            isAuthenticated: false,
        }   
    },
    provide(){
        return{
            Signedup:this.Signedup,
            Lists:this.Lists,
            SchoolList:this.SchoolList,
            countriesList:this.countriesList,
            PathesList:this.PathesList
        }
    },
    watch: {
    $route(to) {
      if (to.meta.requiresAuth && !this.isAuthenticated) {
        this.$router.replace('/login');
      }
    },
}

}
</script>
<style>
    *{
        box-sizing: border-box;

    }
    ::-webkit-scrollbar{
        width: 10px;
        
    }
    ::-webkit-scrollbar-thumb{
        background-color: #76236c;
        border-radius: 10px;
        cursor: pointer;
    }

    ::-webkit-scrollbar-track{
        background-color:  white;
    }
</style>