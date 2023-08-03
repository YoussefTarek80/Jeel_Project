<template>
    <div class="alert alert-danger position-absolute p-4 m-3" role="alert" v-if="valid">
        <span>Your Email and Your password Not correct</span>
      </div>
    <section >
        <div class="box shadow-lg " >
            <div class="logo">
                <img src="http://jeel.suredemos.com/img/logo.b48c0b3a.svg" alt="">
            </div>
                <form action="" @submit.prevent="AddToArr">
                    <div class="inp">
                        <label for="i1">اسم المستخدم/البريد الالكتروني </label>
                        <input type="text" id="i1" :class=" { invalidEmail : validEmail , invalidRequire : reqiredemail } " v-model="email" @keyup="checkValidEmail" @blur="checkRequriedEmail">
                        <p v-if="this.reqiredemail" class="m-2 " style="color:red">Required</p>
                        <p v-if="this.validEmail" class="m-2 " style="color:red">Please enter a valid email </p>
                    </div>
                    <div class="inp">
                        <label for="i2">كلمة المرور</label>
                        <input :class=" {invalidRequire : reqiredpassword }" type="password" id="i2" v-model="password" @blur="checkRequriedPassword" @keyup="checkValidPassword">
                        <p v-if="this.reqiredpassword" class="m-2 " style="color:red">Required</p>
                    </div>
                    <div class="Options">
                        <div>
                            <a href="">نسيت كلمة المرور ؟</a>
                        </div>
                        <div>
                            <label for="i3" style="color: #76236c;" class="me-2">تذكرني</label>
                            <input type="checkbox" id="i3">
                        </div>
                    </div>
                    
                    <button  :disabled="checkDisplay" :class="{ clicked: isClicked }" @click="checkLogin">
                        <span >تسجيل دخول</span>
                        <div class="lds-ring " v-if="reload"><div></div><div></div><div></div><div></div></div>
                    </button>

                </form>

        </div>
        <div class="down">
            <span class="fs-5">جميع الحقوق محفوظة ©️ لجيل عالم الأطفال الامن 2023</span> 
        </div>
        

    </section>
</template>
<script>
export default {
    inject:['Signedup'],
    data(){
        return{
            email:'',
            password:'',
            members:[],
            isClicked:false,
            valid:false,
            validEmail:false,
            validPassword:false,
            reqired:false,
            reqiredemail:false,
            reqiredpassword:false,
            display:true,
            reload:false
        }
    },
    computed: {
        isValidEmail() {
            return /^[^@]+@\w+(\.\w+)+\w$/.test(this.email);
        },
        isValidPassword(){
            if(this.password.length>7){
                return true;
            }
            else{
                return false;
            }
        },
        checkDisplay(){
                if(this.isValidEmail && this.isValidPassword){
                    return false
                }
                return true
        },
    },
    methods:{
        checkValidEmail(){
            if(this.isValidEmail){
                this.validEmail=false;
                this.reqiredemail=false;
            }
            else{
                this.validEmail=true; 
                this.reqiredemail=false;
            }
        },
        checkValidPassword(){
            if(this.isValidPassword && this.checkRequriedPassword){
                this.reqiredpassword=false;
            }
        },
        checkRequriedEmail(){
            if(this.email===''){
                this.reqiredemail=true;
                this.validEmail=false; 
            }
        },
        checkRequriedPassword(){
            if(this.password===''){
                this.reqiredpassword=true;
            }
            else{
                this.reqiredpassword=false;
            }
        },
        AddToArr(){
            const member={
                email:this.email,
                password:this.password
            }
            this.members.push(member)
            this.email='';
            this.password=''
        },
        checkLogin(){
            this.reload=true;
            for(let user of this.Signedup){
                if(user.email==this.email && user.password==this.password){
                    setTimeout(()=>{
                        this.$root.isAuthenticated = true;
                        this.$router.push('/dashboard')
                    },2000)
                }
                else{
                    setTimeout(()=>{
                        this.reload=false;
                        this.valid=true;
                    },2000);
                }
            }
            
        }

    }
}

</script>
<style scoped>
    section{
        background: url('http://jeel.suredemos.com/img/login.1e2bc3e1.png');
        min-height: 100vh;
        background-position: top;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }
    .logo{
        margin: auto;
    }
    img{
        margin-bottom: 20px;
    }
    .box{
        display: flex;
        flex-direction: column;
        width:  40%;
        padding: 30px;
        border-radius: 50px;
        flex-wrap: wrap;
        margin-top:20px ;
    }
    .inp{
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: end;
        flex-wrap: wrap;
        position: relative;
    }
    form{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .inp label{
        margin:10px;
        color: #76236c;
    }
    input{
        border-radius: 2rem;
        outline: none;
        border: 1px solid rgba(128, 128, 128, 0.535);
        padding: .7rem;
        text-align: end;
    }
    .Options{
        display: flex;
        justify-content: space-between;
        margin: 20px;
        flex-direction: row-reverse;
    }
    button{
        background: linear-gradient(270deg,#76236c,#e25199);
        color: white;
        padding: 10px;
        border-radius: 20px;
        border: none;
        margin-top: 30px;
        font-size: 30px;
        cursor: pointer;
        

    }
    button span{
        padding: 10px;
    }
    a{
        text-decoration: none;
        color: black;
        margin: 10px;
    }
    .down{
        text-align: center;
        margin-top:11px;
        color: #76236c;
    }
    .invalidEmail , .invalidRequire{
        border-color: red;
    }
    button:disabled {
        opacity: .65;
    }
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 35px;
        height: 35px;
        
        
      }
      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        
        width: 40px;
        height: 40px;
        margin: 8px;
        border: 8px solid white;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: white transparent transparent transparent;
       
      }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    @media screen and (max-width: 900px) {
        .box{
          width: 90%;
          margin: 30px;
        
        }
        section{
            width: 90%;
            height: 50vh;
            margin: auto;
        }
        .down{
            margin-bottom: 50px;
        }
      }
</style>