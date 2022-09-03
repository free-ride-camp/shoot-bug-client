import Mock from 'mockjs';

let result = {
    status:200,
    msg:'OK',
    data:null
}

Mock.mock('/api/login','post',(data)=>{
    const info = JSON.parse(data.body)
    result.data = {
        user_id:3,
        user_name:'aka张三是个大傻逼南方大数据耐腐蚀',
        role:"NORMAL",
        avatar_url:"https://avatars.githubusercontent.com/u/40767020?v=4",
        jwt:"it's jwt",
        email:info["email"],
        gender:"MALE",
        age:"18",
        city:"ShangHai",
        experience:"",
        field:"",
        err_msg:""
    }
    return result
})

Mock.mock('/api/register','post',(data)=>{
    const info = JSON.parse(data.body)
    result.data = {
        user_id:3,
        user_name:info["user_name"],
        role:"NORMAL",
        avatar_url:"https://avatars.githubusercontent.com/u/40767020?v=4",
        jwt:"it's jwt",
        email:info["email"],
        gender:"MALE",
        age:"18",
        city:"ShangHai",
        experience:"",
        field:"",
        err_msg:""
    }

    return result
})