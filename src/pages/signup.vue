<template>
  <div class="membership">
  <div style="text-align:center"><h1>회원가입</h1></div>

    <form 
        @submit.prevent="signupForm">

    <div v-if="member-info">
      <div><h2>회원 정보 입력</h2></div>

      <div>
        <div>아이디</div>
        <div id="form-id">
          <input name="userId" v-model="member.userId" type="text" placeholder="아이디를 입력(6~20자)">
          <button>중복 확인</button>
        </div>
        <div>
          <span v-if="idExists" class="text-danger">이미 사용 중인 아이디입니다.</span>
          <span v-else hidden>사용 가능한 아이디입니다.</span>
          </div>
      </div>

      <div>
        <div>비밀번호</div>
        <input name="password" v-model="member.password" type="password" placeholder="비밀번호 입력" required>
      </div>

      <div>
        <div>비밀번호 확인</div>
        <input name="passwordCheck" type="password" placeholder="비밀번호 확인" required>
      </div>

      <div>
        <div>이름</div>
        <input name="name" v-model="member.name" type="text" placeholder="이름 입력" required>
      </div>

      <div>
        <div>생년월일</div>
        <input name="birth" v-model="member.birth" type="text" placeholder="생년월일 입력" required>
      </div>

      <div>
        <div>이메일</div>
        <input name="email" v-model="member.email" type="text" placeholder="이메일 입력" required>
      </div>

      <div>
        <div>휴대폰</div>
        <input name="phone" v-model="member.phone" type="text" placeholder="010-1234-5678">
      </div>

      <div>
        <div>주소</div>
        <input name="address" v-model="member.address" type="text" placeholder="주소지 입력" required>
      </div>

      <button type="submit" id="btn-signup1">다음</button>
    </div>

    <div v-else>
      <div>
        <div>동물 등록 번호</div>
        <input name="name" v-model="member.name" type="text" placeholder="이름 입력" required>
      </div>

      <div>
        <div>이름</div>
        <input name="birth" v-model="member.birth" type="text" placeholder="생년월일 입력" required>
      </div>

      <div>
        <div>생년월일</div>
        <input name="email" v-model="member.email" type="text" placeholder="이메일 입력" required>
      </div>

      <div>
        <div>성별</div>
        <input name="phone" v-model="member.phone" type="text" placeholder="010-1234-5678">
      </div>

      <div>
        <div>주소</div>
        <input name="address" v-model="member.address" type="text" placeholder="주소지 입력" required>
      </div>
    </div>
     
     <button type="submit" id="btn-signup1">다음</button>

    </form>

  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
export default {
  name: 'SignupForm',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const member = ref({
      userId: '',
      password: '',
      name: '',
      birth:'',
      email: '',
      phone: '',
      address: ''
    });

    const userId = ref([]);

    const signupForm = async() => {
      try {
        console.log(member.value);
        const res = await axios.post('/members/signup', {
          userId: member.value.userId,
          password: member.value.password,
          name: member.value.name,
          birth: member.value.birth,
          email: member.value.email,
          phone: member.value.phone,
          address: member.value.address
        });
        console.log(res.data);
        router.push({ name: 'Home' });
        //location.href = '/members/login';

        } catch (error) {
            console.log(error);
        } 
        
        console.log(member.value);
    };

    const idCheck = async() => {
      const res = await axios.get('/members');
      userId.value = {...res.data.userId};

    };

    return {
      member,
      signupForm,
    };
  }
}
</script>

<style>

</style>