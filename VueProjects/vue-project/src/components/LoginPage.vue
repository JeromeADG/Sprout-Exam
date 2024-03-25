<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
        if (username.value === 'admin' && password.value === 'password') {
            router.push('/home');
        } else {
            alert('Invalid username or password');
        }
    };
</script>


<template>
    <div class="container">
        <div class="form">
            <div class="header">
                <h1>Sprout Employee Portal: Login</h1>
            </div>
            
            <div class="form-group">
                <h4>Username</h4>
            </div>
            
            <div class="form-group input">
                <input type="text" v-model="username" placeholder="Enter Username">
            </div>
            
            <div class="form-group">
                <h4>Password</h4>
            </div>
            
            <div class="form-group input">
                <input type="password" v-model="password" placeholder="Enter Password">
            </div>
            
            <div class="form-group button">
                <button @click="login">Login</button>
            </div>
        
        </div>
    </div>
</template>



<style scoped>
* 
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.container {
    width: 100%;
    min-height: 100vh;
    background-image: url("../src/images/asfalt-light.png");
    background-color: rgb(17, 75, 31);
    display: grid;
    align-items: center;
    justify-items: center;
}

.form {
    background-color: rgb(117, 161, 117);
    width: 300px;
    border-radius: 10px;
    padding: 20px 10px 20px 10px;
}


.form-group {
    width: 100%;
    padding: 5px 10px;
}


.header {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
}

.form-group {
    width: 100%;
    padding: 5px 10px;
}


.form-group input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
}

.form-group button {
padding: 10px;
width: 100%;
background-color: rgb(236, 170, 26);
border: none;
color: #000000;
border-radius: 10px;
}

.form-group button:hover {
padding-top: 10px;
width: 100%;
background-color: rgb(253, 215, 157);
border: none;
color: #000000;
border-radius: 10px;
}

</style>