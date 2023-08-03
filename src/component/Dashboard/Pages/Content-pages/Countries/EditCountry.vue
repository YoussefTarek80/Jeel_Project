<template>
    <header-pages></header-pages>
    <section class="board-pages Main ">
        <div class="header">
            <span class="text-left fs-3 fw-bold">تعديل الدوله</span>
        </div>
        <div class=" d-flex flex-row justify-content-around ">
            <div class="d-flex flex-column w-50 p-3 m-3" >
                <label for="in1">اسم الدوله</label>
                <input type="text" name="" id="in1" v-model="name" @blur="checkRequirename" @keyup="validname"  >
                <p style="color:red" class="m-2" v-if="this.requiredname">Require</p>
            </div>
            <div class="d-flex flex-column w-50 p-3 m-3">
                <label for="in2">كود الدوله</label>
                <input type="text" name="" id="in2" v-model="code" @blur="checkRequirecode" @keyup="validcode">
                <p style="color:red" class="m-2" v-if="this.requiredcode">Require</p>
            </div>
        </div>
        <div class="d-flex justify-content-end  mt-5 ">
            <button class="btn btn-primary save"  :disabled="checkDisabled" @click="updateCountry">تعديل</button>
            <router-link to="/dashboard/countries" class="btn btn-primary cancel">الغاء</router-link>
        </div>
    </section>   
    <footer-view></footer-view>
    <base-dialog :show="showDialog">
        <strong>تم التعديل بنجاح</strong>
    </base-dialog>
</template>
<script>
import BaseDialog from "../../../../../UI/BaseTeleport.vue";
import HeaderPages from "../../../../Header/headerPages.vue";
import FooterView from "../../../../Footer/footer.vue";
export default {
    inject:['countriesList'],
    props:['title'],
  components: {
    HeaderPages,
    FooterView,
    BaseDialog
  },
  data(){
    return{
        isDisabled:true,
        name:'',
        code:'',
        activeName:'',
        requiredname:false,
        requiredcode:false,
        valid:false,
        showDialog:false
    }
  },

  computed:{
    checkDisabled(){
        if(this.valid){
           return false;
        }
        return true
    }
  },
  methods: {
    checkRequirename() {
        if(this.name==''){
            this.requiredname=true;
            this.valid=false
        }
        else{
            this.requiredname=false;
            
        }
    },
    checkRequirecode() {
        if(this.code==''){
            this.requiredcode=true;
        }
        else{
            this.requiredcode=false;
        }
    },
    validname(){
        if(this.name==''){
            this.requiredname=true;
            this.valid=false
        }
        else{
            this.requiredname=false;
            this.valid=true
        }

        
    },
    validcode(){
        if(this.code==''){
            this.requiredcode=true;
            this.valid=false
        }
        else{
            this.requiredcode=false;
            this.valid=true
        }
    },
    AddToList(){
        
        let item={
            name : this.name,
            code : this.code
        }
        this.countriesList.push(item)
        localStorage.setItem('countriesList', JSON.stringify(this.countriesList))
        setTimeout(()=>{
            this.showDialog=true
            
        },1000)
        setTimeout(()=>{
            this.$router.push('/dashboard/countries');
        },2000)
        this.name='';
        this.code=''
        // this.$router.push('/dashboard/countries');
    },
    updateCountry(){
        const countryId = this.$route.params.id;
        const countriesListString = localStorage.getItem("countriesList");
        if (countriesListString) {
          const countriesList = JSON.parse(countriesListString);
          const countryIndex = countriesList.findIndex((country) => country.id === countryId);
         
          if (countryIndex !== -1) {
            countriesList[countryIndex].name = this.name;
            countriesList[countryIndex].code = this.code;
            localStorage.setItem('countriesList', JSON.stringify(countriesList))
            setTimeout(()=>{
                this.showDialog=true
                
            },1000)
            setTimeout(()=>{
                this.$router.push('/dashboard/countries');
            },2000)
            this.name='';
            this.code='';
          }
        }
    }
  },
}
</script>

<style scoped>
label{
    padding: 10px;
}
.Main{
    height:70vh;
    direction: rtl;
    text-align: right;
}
input{
    padding: 10px;
    border-radius:50px ;
    outline: none;
    border: 1px solid rgba(128, 128, 128, 0.659);
}
button{
    border-radius:50px ;
    padding: 10px;
    margin:10px;
    width: 15%;
    font-size: 20px;
    
}
a{
    border-radius:50px ;
    padding: 10px;
    margin:10px;
    width: 15%;
    font-size: 20px;
}
.save{
    background: linear-gradient(270deg,#76236c,#e25199);
    border: none;
}
.cancel{
    background: none;
    border-color: #76236c;
    color: #76236c;
}
.cancel:hover{
    background: none;
    color: #76236c;
    border-color: #76236c;
}
button:disabled {
    opacity: .65;
}
</style>
