const validate = values => {
    const error = {};
    const {title} = values;
    if(!title)
        error['title'] = 'Vui long nhap du lieu';
    else if(title.trim().length < 5)
        error['title'] = 'Tieu de phai tu 5 k tu';
    return error;
};

export default validate;
