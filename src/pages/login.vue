<template>

  <div class="hbottom">
   
  </div>

	<div style="width:50%; margin:auto;">
		<div class="membership">
  	<div style="text-align:center"><h1>로그인</h1></div>
		
    <form role="form" action="${path}/member/login" @submit.prevent="loginForm">

      <div>
      	
        <div>아이디</div>
        <div>
          <input type="text" v-model="member.userId">
        </div>
      </div>

      <div>
        <div>비밀번호</div>
        <input type="password" v-model="member.password">
        <div><span v-if="failed" class="text-danger">잘못된 아이디 또는 잘못된 비밀번호입니다.</span></div>
      </div>

  	  <button type="submit" @click="submit">로그인</button>
	  <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
    </form>
    
  
  </div>


  <div class="agree"></div> <!-- 이거 지우지 마세요! -->
  	
</div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const member = ref({
      userId: '',
      password: '',
    });

    const loginForm = async() => {
      try {
        console.log(member.value);
        const res = await axios.post('/members/login', {
          userId: member.value.userId,
          password: member.value.password
        });

        if (res.status === 200) {
          const member = res.data.member;
          sessionStorage.setItem('sessionId', JSON.stringify(member));
          alert("로그인 성공")
          location.href = '/';
        } else {
          console.error("로그인 실패");
        }
        
      } catch (error) {
          console.log(error);
          location.href = '/login';
          alert("잘못된 로그인입니다.")
          
      } 
        
        console.log(member.value);
    };

    return {
      member,
      loginForm,
    };
  }
}
</script>

<style>

</style>