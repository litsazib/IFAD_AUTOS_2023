import axios from "axios";
/*============== Contact form ================*/ 
export const sendContact = async(postData)=>{
  let EndPoint="http://implapi.ifadgroup.com:8001/send-email"
  const{FullName,Subject,Email,ContactNum,Massage} = postData
  let PostBody = {FullName,Subject,Email,ContactNum,Massage}
  const headers = {
  'Accept': 'application/json, text/plain, */*',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
      crossDomain: true
  };
 return axios.post(EndPoint,PostBody,headers).then((res)=>{
  console.log(res)
      if(res.status===200){
         return true;
      }
      else{
         return  false;
      }
  }).catch((err)=>{
      console.log(err);
      return false;
  });
}