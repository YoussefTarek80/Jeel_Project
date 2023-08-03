<template>
          <div data-v-cb5f9caa="" class="hold-table mt-4">
        <div data-v-cb5f9caa="" class="table-responsive shadow-lg rounded-4">
          <table class=" ">
            <thead role="rowgroup" class="thead-gradient">
              <tr role="row">
                <th role="columnheader" scope="col" aria-colindex="1" class="">
                  <slot name="head"></slot>
                </th>
                <th role="columnheader" scope="col" aria-colindex="2" class="">
                    <slot name="name"></slot>
                </th>
                <th role="columnheader" scope="col" aria-colindex="3" class="">
                    <slot name="code"></slot>
                </th>
                <th role="columnheader" scope="col" aria-colindex="4" class="">
                    <slot name="setting"></slot>
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup">
                    <slot name="body" class="body">
                        <tr>
                           
                        </tr>
                    </slot>
            </tbody>
          </table>
          <!-- <h2 v-if="c.length === 0" class="text-danger m-4 " >فارغه</h2> -->
        </div>
      </div>
</template>
<script>
export default{
}
</script>
<style scoped>
    .thead-gradient {
    color: #fff;
    background: linear-gradient(270deg, #76236c, #58c6f2);
    border-radius: 30px;
    position: relative;
    }
    table {
    border-radius: 30px; /* add border-radius property to make table rounded */
    width: 100%;
    
    }

    table thead th {
    padding: 10px;
    }

    table td {
    padding: 10px;
    }
    ul {
    position: absolute;
    list-style: none;
    left: 15%;
    
    }

    .setting {
    border-radius: 10px;
    }
    .setting button {
    border: none;
    background: none;
    }
    .setting ul {
    background-color: white;
    }
    .setting a {
    text-decoration: none;
    color: #76236c;
    padding: 10px;
    border-radius: 10px;
    }
    .setting ul li{
    margin:10px
    }
    .setting li :hover {
    background-color: rgba(128, 128, 128, 0.489);
    }

</style>