<template>
    <header-pages></header-pages>
    <section class="Home">
    <div class="board-pages">
      <div class="header">
        <div class="d-flex fs-4">
          <span class="fs-2">قائمة المسارات</span>
          <p class="total text-light">{{ PathesList.length }}</p>
        </div>
        <router-link
          to="/dashboard/countries/AddCountry"
          class="btn btn-primary rounded-5 Addbtn fs-6"
          >اضافة مسار جديد</router-link
        >
      </div>

      <div class="Search mt-4">
        <input
          type="text"
          class="inputSerach"
          placeholder="البحث"
          v-model="search"
        />
        <select name="" class="inputSelected">
          <option value="null" selected disabled>ترتيب حسب</option>
          <option value="asc">تصاعديا</option>
          <option value="desc">تنازليا</option>
        </select>
      </div>
      <base-table>
            <template v-slot:head>
            <div>
              التسلسل
            </div>
          </template>
          <template v-slot:name>
            <div>
              الاسم
            </div>
          </template>
          <template v-slot:code>
            <div>
              الوصف 
            </div>
          </template>
          <template v-slot:setting>
            <div>
              اجراء
            </div>
          </template>
          <template v-slot:body>
            <tr
                role="row"
                class=""
                v-for="(item, index) in PathesList"
                :key="item.id"
              >
                <td aria-colindex="1" role="cell" class="">{{ index+1 }}</td>
                <td aria-colindex="2" role="cell" class="">{{ item.name }}</td>
                <td aria-colindex="3" role="cell" class="">{{ item.code }}</td>
                <td aria-colindex="4" role="cell" class="">
                  <div class="setting text-center">
                    <button @click="showSetting(index)">
                      <img
                        src="http://jeel.suredemos.com/img/actions.462f3254.svg"
                      />
                    </button>
                    <ul v-if="selectedRow === index" class="rounded-4">
                      <li>
                        <router-link to="/">تفاصيل</router-link>
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <button @click="edit(index)">تعديل</button>
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <button @click="showDialogForm">حذف</button>
                        <base-dialog :show="showDialog">
                            <strong>هل تريد تاكيد الحذف</strong>
                            <div class="Confirm-delete">
                              <button @click="deleteCountry(index)">نعم احذف</button>
                              <button @click="unshowDialogForm">لا</button>
                            </div>
                        </base-dialog>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
          </template>
        </base-table>
      <h2 v-if="PathesList.length === 0" class="text-danger m-4 " >فارغه</h2>
    </div>
  </section>
    <FooterView />
</template>
<script>
import HeaderPages from "../../../../Header/headerPages.vue";
import FooterView from "../../../../Footer/footer.vue";
// import BaseDialog from "../../../../../UI/BaseTeleport.vue";
import BaseTable from "../../../../../UI/BaseTable.vue";
export default{
    inject:['PathesList'],
    components: {
        HeaderPages,
        FooterView,
        // BaseDialog,
        BaseTable
  },
  data(){
    return{
        filteredPathes: [],
    }
  },
}
</script>
<style scoped>
.Confirm-delete{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-direction: row-reverse;
}
.Confirm-delete button:nth-child(1){
    border: none;
    outline: none;
    border-radius: 50px;
    background: linear-gradient(270deg,#76236c,#e25199);
    color: white;
    font-weight: bold;
    padding: 10px;
    font-size: 20px;
    width: 20%;
}
.Confirm-delete button:nth-child(2){
    border:2px solid #76236c;
    outline: none;
    border-radius: 50px;
    background: none;
    color: black;
    padding: 10px;
    font-size: 20px;
    width: 20%;
}
.Home {
  direction: rtl;
  text-align: center;
}
.header {
  display: flex;
  justify-content: space-between;
}
.header span {
  color: black;
  font-size: 20px;
}
:global(.board-pages) {
  background-color: rgba(249, 249, 249, 1);
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-top: 20px;
  border-radius: 20px;
  position: relative;
  margin-left: 50px;
  margin-right: 50px;
}
.Search {
  display: flex;
  justify-content: space-between;
}

.Addbtn {
  width: 20%;
  height: 10%;
  background: linear-gradient(270deg, #76236c, #e25199);
  outline: none;
  border: none;
  padding: 0.5rem 4rem !important;
}
.total {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  padding: 10px;
  background: #58c6f2;
}
.inputSerach {
  padding: 20px;
  border-radius: 50px;
  width: 30%;
  border: 1px solid gray;
  outline: none;
}
.inputSelected {
  padding: 20px;
  border-radius: 50px;
  width: 25%;
  border: 1px solid gray;
  outline: none;
  cursor: pointer;
  color: #76236c;
}
.setting button {
    border: none;
    background: none;
    }
</style>