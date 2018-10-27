
export default {

    localidade: state => {


        return `Este usuário mora em ${state.user.city} - ${state.user.state}`


    }

}