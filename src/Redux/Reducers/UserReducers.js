let taiKhoanNguoiDung = '';
if(localStorage.getItem("taiKhoan")) { //Kiểm tra taiKhoan có trong store không => có thì lấy làm giá trị mặc định cho state
    let tkNguoiDungStore = localStorage.getItem("taiKhoan");
    taiKhoanNguoiDung = JSON.parse(tkNguoiDungStore).taiKhoan;
}
const stateDefault = {
    taiKhoan: taiKhoanNguoiDung,
    register:{},
    listUser:[]
}

export const UserReducer = (state=stateDefault, action) => {
    switch(action.type){
        case 'LOGIN' : {
            state.taiKhoan = action.userName;
            return {...state}
        }
        case 'REGISTER' : {
            state.taiKhoan = action.userName;
            return {...state}
        }

        case 'Get_List_User' : {
            state.listUser = [...action.listUser];
            return {...state}
        }
        default: {
            return {...state}
        }
    }
}