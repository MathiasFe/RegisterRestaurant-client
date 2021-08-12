
import * as api from "../../api";


export const cadastrar = async (formProfile, history) =>{
  let response = {data:{}, success:true, error:{message:""}}
      try {
          const {data} = await api.Cadastrar(formProfile);
          response.data =  data;
          localStorage.setItem("@restaurantProfile",JSON.stringify({...data}));
          history.push("/meusRestaurantes");
          return response;
      } catch (error) {
        if(error.response){
          response.success = false;
          response.error.message = error.response.data;
          localStorage.clear();
          return response;
        }
        else {
          response.error.message = "Algo deu errado, por favor tente mais tarde";
          response.success = false;
          return response;
        }
        

      }
}
