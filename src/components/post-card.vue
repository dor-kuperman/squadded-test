<template>
  <div class="post-card flex">
    <div v-on:click="goToUserPage" class="user-info flex">
      <img v-bind:src="post.owner.picture" />
      {{ post.owner.firstName }}
    </div>
    <div class="product-details flex">
      <img class="product-image" v-bind:src="post.image" />
      {{ post.title }}
      <div class="price-likes-comments flex">
        € {{ post.price }}
        <div class="comment-like-buttons-container">
          <i
            v-on:click="toggleViewComments"
            class="far fa-comment likes-comments-rem"
          ></i>
          <span
            v-on:click="toggleViewComments"
            :class="
              commentsCounter < 100
                ? 'comments-counter'
                : 'comments-counter-over-100'
            "
            ref="commentCounter"
            >{{ commentsCounter }}</span
          >
          <i
            v-on:click="userPressedLikeButton"
            :class="[
              didUserLike ? 'red-for-like' : null,
              'far fa-heart',
              'likes-comments-rem',
            ]"
          >
          </i>
          <span
            v-on:click="userPressedLikeButton"
            v-if="likesCounter > 0"
            :class="
              likesCounter < 100 ? 'like-counter' : 'like-counter-over-100'
            "
            >{{ likesCounter }}</span
          >
        </div>
      </div>
      <div v-if="viewComments" class="comment-input-container flex">
        <input
          v-model="commentInput"
          input
          v-on:keyup.enter="addComment"
          type="text"
          class="comment-input"
        />
        <i
          v-on:click="addComment"
          style="cursor: pointer"
          class="fas fa-comment-medical"
        ></i>
      </div>
      <comment-list v-if="viewComments" :comments="comments" />
    </div>
  </div>
</template>

<script>
import CommentList from "./comment-list.vue";
export default {
  name: "postCard",
  components: {
    CommentList,
  },
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      likesCounter: this.post.likes,
      commentsCounter: this.post.comments.length,
      didUserLike: false,
      viewComments: false,
      comments: this.post.comments,
      commentInput: "",
      userID: this.post.owner.id,
    };
  },
  mounted() {
    this.isTextAndClassCorrect();
  },
  methods: {
    isTextAndClassCorrect() {
      // getting the comments number element from DOM
      const styleClassOfComments = this.$refs.commentCounter.className;
      const numOfComments = this.$refs.commentCounter.innerHTML;

      if (numOfComments < 100) {
        return [styleClassOfComments, numOfComments];
      } else if (numOfComments >= 100) {
        return [styleClassOfComments, numOfComments];
      }
    },
    getText() {
      const numOfComments = this.$refs.commentCounter.innerHTML;
      return numOfComments;
    },
    getClass() {
      const styleClassOfComments = this.$refs.commentCounter.className;
      return styleClassOfComments;
    },

    goToUserPage() {
      this.$router.push(`/user/${this.userID}`);
    },
    userPressedLikeButton() {
      this.didUserLike = !this.didUserLike;
      this.didUserLike ? this.likesCounter++ : this.likesCounter--;
    },
    toggleViewComments() {
      this.viewComments = !this.viewComments;
    },
    addComment() {
      if (this.commentInput === "") {
        return;
      }
      console.log(JSON.stringify(this.commentInput));
      this.comments.unshift({ body: this.commentInput });
      this.commentsCounter++;
      this.commentInput = "";
    },
  },
};
</script>

<style lang="scss">
.flex {
  display: flex;
}

.post-card {
  flex-direction: column;
  max-width: 20rem;
  justify-content: center;
  border: 2px solid #bababa;
  margin: 1rem;
  .user-info {
    height: 3rem;
    align-items: center;
    font-size: 1.5rem;
    padding: 1rem;
    width: 8rem;
    cursor: pointer;
    img {
      border-radius: 50%;
      max-width: 2rem;
      margin-right: 1rem;
      margin-left: 0.5rem;
    }
  }

  .product-details {
    flex-direction: column;
    background-color: #d9d9d9;
    font-size: 1.5rem;
    .product-image {
      max-width: 10rem;
      align-self: center;
    }
    .price-likes-comments {
      padding-left: 10px;
      background-color: white;
      height: 4rem;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;

      .comment-like-buttons-container {
        max-width: 74px;
      }

      .likes-comments-rem {
        cursor: pointer;
        font-size: 1.8rem;
      }

      .like-counter {
        position: relative;
        left: -19px;
        top: -8px;
        font-size: 0.6rem;
        cursor: pointer;
      }
      .like-counter-over-100 {
        position: relative;
        left: -19px;
        top: -10px;
        font-size: 0.4rem;
        cursor: pointer;
      }

      .red-for-like {
        color: red;
      }
      .comments-counter {
        position: relative;
        left: -17px;
        top: -8px;
        font-size: 0.6rem;
        cursor: pointer;
      }
      .comments-counter-over-100 {
        position: relative;
        left: -22px;
        top: -8px;
        font-size: 0.6rem;
        cursor: pointer;
      }
    }
    .comment-input-container {
      margin-top: 0.4rem;
      justify-content: space-evenly;
      .comment-input {
        font-size: 16px;
        border-width: 1px;
        border-color: #cccccc;
        background-color: #ffffff;
        color: #000000;
        border-style: solid;
        border-radius: 0px;
        box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
      }
    }
  }
}
</style>
