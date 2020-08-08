<template>
  <section class="chat-box">
    <div class="chat-box-list-container" ref="chatbox">
      <div class="message">
        <div v-for="(message,index) in messages" :key="index" :class="message.sender">
          <img
            v-if="message.sender=='User'"
            src="https://image.flaticon.com/icons/svg/21/21104.svg"
            alt="Avatar"
            class="profilePic"
          />
          <img
            v-else
            src="https://p7.hiclipart.com/preview/415/152/842/robotics-internet-bot-chatbot-robot.jpg"
            alt="Avatar"
            class="profilePic"
          />

          <p>{{message.message}}</p>
          <span :class="message.timestamp">11:00</span>
        </div>
        <div class="ChatBot" v-if="loading">
          <img
            src="https://p7.hiclipart.com/preview/415/152/842/robotics-internet-bot-chatbot-robot.jpg"
            alt="Avatar"
            class="profilePic"
          />
          <p>Bot is typing...</p>
        </div>
      </div>
    </div>
    <div class="chat-inputs">
      <input required type="text" v-model="message" @keyup.enter="sendMessage" />
      <button type="submit" :disabled="loading" @click="sendMessage">Send</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Chatbot',
  data() {
    return {
      message: '',
      messages: [],
      loading: false,
    }
  },
  methods: {
    sendMessage() {
      this.loading = true
      this.messages.push({
        message: this.message,
        sender: 'User',
        timestamp: 'timeStampRight',
      })
      this.message = ''
      this.$axios
        .post('chatbotserver/reply', {
          message: this.message,
        })
        .then((res) => {
          this.messages.push({
            message: res.data,
            sender: 'ChatBot',
            timestamp: 'timeStampLeft',
          })
          this.loading = false
        })
    },
  },
}
</script>

<style scoped lang="scss">
.chat-box,
.chat-box-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}
.chat-box-list-container {
  overflow: auto;
  margin-bottom: 1px;
}
.chat-box-list {
  padding-left: 10px;
  padding-right: 10px;
  span {
    color: white;
  }
  .ChatBot {
    background: #99cc00;
    border-radius: 4px;
    padding: 8px;
    span {
    }
    p {
      word-break: break-all;
      float: right;
    }
  }
  .User {
    background: #0070c8;
    border-radius: 4px;
    padding: 8px;
    span {
    }
    p {
      word-break: break-all;
      float: left;
    }
  }
}
.chat-box {
  margin: 10px;
  border: 1px solid #999;
  width: 50vw;
  height: 75vh;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  align-items: space-between;
  justify-content: space-between;
}
.chat-inputs {
  display: flex;

  input {
    line-height: 3;
    width: 100%;
    border: 1px solid #999;
    border-left: none;
    border-bottom: none;
    border-right: none;
    border-bottom-left-radius: 4px;
    padding-left: 15px;
  }
  button {
    width: 145px;
    color: white;
    background: #0070c8;
    border-color: #999;
    border-bottom: none;
    border-right: none;
    border-bottom-right-radius: 3px;
  }
}
.profilePic {
  width: 50%;
}
.timeStampLeft {
  float: left;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
.User {
  font-size: 18px;
  font-weight: 500;
  border: 2px solid #dedede;
  background-color: #55e4a8;
  color: rgb(0, 0, 0);
  border-radius: 12px;
  padding: 25px;
  margin: 10px 0;
  p {
    text-align: left;
  }
}
.User img {
  float: left;
  max-width: 60px;
  width: 50%;
  margin-right: 20px;
  border-radius: 50%;
}
.User img.right {
  float: right;
  margin-left: 20px;
  margin-right: 0;
}
.ChatBot img {
  float: right;
  max-width: 60px;
  width: 50%;
  margin-left: 20px;
  border-radius: 50%;
}
.ChatBot img.right {
  float: left;
  margin-right: 20px;
  margin-left: 0;
}
.timeStampRight {
  float: right;
  color: rgb(0, 0, 0);
  font-weight: bold;
}
.timeStampLeft {
  float: left;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
.message {
  font-size: 18px;
  font-weight: 500;
  color: rgb(0, 0, 0);
  border-radius: 12px;
  padding: 10px;
  margin: 10px 10px;
}
.message::after {
  content: '';
  clear: both;
  display: table;
}
.ChatBot {
  font-size: 18px;
  font-weight: 500;
  border: 2px solid #dedede;
  border-radius: 12px;
  padding: 25px;
  margin: 10px 0px;
  border-color: #ccc;
  background-color: rgb(111, 25, 182);
  color: white;
  p {
    text-align: right;
  }
}
.paragraphUser {
  float: left;
}
button:disabled {
  cursor: not-allowed;
  pointer-events: none;
  color: #c0c0c0;
  background-color: #ffffff;
}
</style>