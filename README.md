# dojo-blog

![](src/assets/blog.webp)

使用 Vue.js Composition API 實做一個有讀取、新增、刪除文章的簡易部落格，後端使用 Firebase 儲存文章資料

**🗝️ Keys**

- Composition API
- Firebase setup

## Project Setup

```sh
# Install dependencies
npm install

# Compile and hot-reload for development
npm run dev

# Compile and minify for production
npm run build

# Lint with [ESLint](https://eslint.org/)
npm run lint

```

## Composition API

為什麼使用 Composition API?

當 APP 變得複雜時，使用 Option API 會發生功能對應的程式碼被 Options 分開，

增加理解、維護程式碼時間。

使用 Composition API 解決以下問題:

1. 能把功能對應的程式碼放在一起。
2. 解決程式碼重複的問題(將 reusable logic 獨立，在不同的 Component 引入)

> 💡[Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

## Firebase

Firebase 是一個 app 開發平台，提供多項功能供開發人員使用。此專案使用 Firebase database 儲存資料。

使用版本為較舊的 8.0.0 版本。要注意連結、初始化資料庫的程式碼跟新版不同。

> 💡[Firebase](https://firebase.google.com/)

## Notes

### Composition API

**Reactive**
Option API 的資料具即時性(reactive)，在 Composition API,需要引入 `ref` 來達成同樣功能

```javascript
import { ref, reactive } from 'vue';
export default {
  name: 'Home',
  setup() {
    const ninjaOne = ref({ name: 'mario', age: 30 });

    // Can not use primitive type value in reactive
    const ninjaTwo = reactive({ name: 'luigi', age: 35 });
    const updateNinjaOne = () => {
      ninjaOne.value.age++;
    };
    const updateNinjaTwo = () => {
      ninjaTwo.age++;
    };
    return { ninjaOne, ninjaTwo, name, updateNinjaOne, updateNinjaTwo };
  },
};
```

**Watchers**

> 💡[Vue.js - Watchers](https://vuejs.org/guide/essentials/watchers.html)

```js
// HomeView.vue

import { ref, computed, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const search = ref('');
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);
    // Will fire whenever the parameter value changed
    const stopWatch = watch(search, () => {
      console.log('watch function fired');
    });
    // Run initially when the component first load, or run when any dependency changed
    // In the case,search.value is the dependency
    const stopEffect = watchEffect(() => {
      console.log('watch effect function fired', search.value);
    });
    // Stop the watchers by invoke them!
    const handleClick = () => {
      stopWatch();
      stopEffect();
    };
    const matchingNames = computed(() => names.value.filter((name) => name.includes(search.value)));
    return { names, search, matchingNames, handleClick };
  },
};
```

**Lifecycle hooks**

> 💡[Vue.js- Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)

```javascript
// PostList.vue

import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue';
export default {
  components: { SinglePost },
  props: ['posts'],
  setup(props) {
    // Lifecycle hooks in composition api
    onMounted(() => {
      console.log('component mounted');
    });
    onUnmounted(() => {
      console.log('component unmounted');
    });
    onUpdated(() => {
      console.log('component updated');
    });
  },
};
```
