import{signUpForm}from"../helpers/locatores.js";import{url}from"../helpers/urls.js";import{regex}from"../helpers/regex.js";const msgAlert={nameLastNameAlert:"The name must contains 4 characters",emailAlert:"Invalid email",phoneNumberAlet:"Invalid phone number",passwordAlert:"The password must contains uppercase, lowercases, numbers and at least 8 charaters"},{form:form,name:name,lastName:lastName,email:email,phoneNumber:phoneNumber,password:password,alertName:alertName,alertLastName:alertLastName,alertEmail:alertEmail,alertPhoneNumber:alertPhoneNumber,alertPassword:alertPassword}=signUpForm,regexName=regex.user,regexLastName=regex.user,regexEmail=regex.email,regexPhonNumber=regex.phone_number,regexPassword=regex.password;let state={name:!1,lastName:!1,email:!1,phoneNumber:!1,password:!1,verifyExistingAccount:!1};const getUserAccounts=()=>JSON.parse(sessionStorage.getItem("account"))||[],updateFieldValidationState=(e,a,t,s)=>0===e.value.length?(t.classList.remove("alert-text"),t.textContent="",e.classList.remove("alert-input"),!1):a.test(e.value)?(t.classList.remove("alert-text"),t.textContent="",e.classList.remove("alert-input"),!0):(t.classList.add("alert-text"),t.textContent=s,e.classList.add("alert-input"),!1),validateName=(e,a,t)=>{e.addEventListener("input",(()=>{state.name=updateFieldValidationState(e,a,t,msgAlert.nameLastNameAlert)}))},validateLastName=(e,a,t)=>{e.addEventListener("input",(()=>{state.lastName=updateFieldValidationState(e,a,t,msgAlert.nameLastNameAlert)}))},validateEmail=(e,a,t)=>{e.addEventListener("input",(()=>{const s=getUserAccounts();state.email=updateFieldValidationState(e,a,t,msgAlert.emailAlert);-1!==s.findIndex((e=>e.email===user_email.value))?(t.classList.add("alert-text"),t.textContent="Email associated with an existing account",userEmail.classList.add("alert-input")):state.verifyExistingAccount=!0}))},validatePhoneNumber=(e,a,t)=>{e.addEventListener("input",(()=>{state.phoneNumber=updateFieldValidationState(e,a,t,msgAlert.phoneNumberAlet)}))},validatePassword=(e,a)=>{e.addEventListener("input",(()=>{state.password=updateFieldValidationState(e,a,alertPassword,msgAlert.passwordAlert)}))},getData=(e,a,t,s,r)=>{const l={name:e,lastName:a,email:t,phoneNumber:s,password:r},n=getUserAccounts();return n.push(l),sendData(n),l},sendData=e=>{sessionStorage.setItem("account",JSON.stringify(e))};form.addEventListener("submit",(e=>{e.preventDefault(),state.name&&state.lastName&&state.email&&state.phoneNumber&&state.password&&state.verifyExistingAccount&&(getData(name.value,lastName.value,email.value.toLowerCase(),phoneNumber.value,password.value),form.reset(),window.open(url.log_in,"_blank"),window.close())})),validateName(name,regexName,alertName),validateLastName(lastName,regexLastName,alertLastName),validateEmail(email,regexEmail,alertEmail),validatePhoneNumber(phoneNumber,regexPhonNumber,alertPhoneNumber),validatePassword(password,regexPassword);