<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form class="q-gutter-md">
        <q-input filled v-model="name" label="姓名">
          <template v-slot:prepend>
            <q-icon name="face"></q-icon>
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click="name = ''"
              class="cursor-pointer"
            ></q-icon>
          </template>
        </q-input>
        <q-input filled v-model="money" label="金額">
          <template v-slot:prepend>
            <q-icon name="attach_money"></q-icon>
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click="money = ''"
              class="cursor-pointer"
            ></q-icon>
          </template>
        </q-input>
        <q-select
          color="teal"
          filled
          v-model="category"
          :options="options"
          label="類別"
        >
          <template v-slot:prepend>
            <q-icon name="category" />
          </template>
        </q-select>
        <q-input
          label="日期"
          filled
          v-model="date"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <div class="row justify-end">
          <div class="col-3">
            <q-btn
              label="重置"
              flat
              type="reset"
              color="white"
              text-color="red"
            />
          </div>
          <div class="col-3">
            <q-btn
              label="送出"
              type="submit"
              color="primary"
              @click.prevent="onSubmit"
            />
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      name: "",
      money: 0,
      date: "",
      category: "",
      options: [
        {
          label: "Google",
          value: "Google",
          description: "Search engine",
          category: "1"
        },
        {
          label: "Facebook",
          value: "Facebook",
          description: "Social media",
          category: "1"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("onSubmit");
    }
  }
};
</script>
