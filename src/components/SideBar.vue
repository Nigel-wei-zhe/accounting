<template>
  <div>
    <q-item
      v-for="(item, itemIndex) in sideBarList"
      :key="`sideBarList-${itemIndex}`"
      clickable
      tag="a"
      target="_blank"
      @click="goto(item.link)"
    >
      <q-item-section v-if="item.icon" avatar>
        <q-icon :name="item.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
        <q-item-label caption>
          {{ item.caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      sideBarList: [
        {
          title: "記帳表單",
          caption: "送出表單,統計花費",
          link: "/accounting",
          icon: "request_quote"
        },
        {
          title: "帳務紀錄",
          caption: "統計表",
          link: "/detail",
          icon: "timeline"
        }
      ]
    };
  },
  methods: {
    goto(link) {
      this.$router.push(link);
    }
  }
};
</script>
