import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { useFetch } from "@vueuse/core";

export const useNewStore = defineStore("newStore", () => {
  // const topNewsList = ref<Array<number>>([]);
  // 另一种写法
  const topNewsList: Ref<Array<number>> = ref([]);
  const bestNewsList: Ref<Array<number>> = ref([]);
  const isNewsListFetching = ref<boolean>(false);

  const getTopNewsList = () => {
    const { data } = useFetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    topNewsList.value = JSON.parse(data.value as string) as Array<number>;
  };

  const getBestNewsList = async () => {
    const { data } = useFetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    // as 类型断言
    bestNewsList.value = JSON.parse(data.value as string) as Array<number>;
  };

  const getNewNewsList = () => {};

  const fetchAllNews = async () => {
    try {
      isNewsListFetching.value = true;
      await Promise.all([
        getTopNewsList(),
        getBestNewsList(),
        getNewNewsList(),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    topNewsList,
    fetchAllNews,
    getTopNewsList,
    isNewsListFetching,
    bestNewsList,
  };
});
