$(document).ready(function(){
    var ten = $("#ten");
    var tb_ten = $("#tb_ten");
    function KiemtraTen() {
        var re = /^[a-zA-Z\s]+$/;
        if (ten.val() == "") {
            tb_ten.html("* Không được để trống");
            tb_ten.addClass("error");
            return false;
        }
        if (!re.test(ten.val())) {
            tb_ten.html("* Vui lòng nhập tên hợp lệ (Chỉ chấp nhận chữ cái và khoảng trống)");
            tb_ten.addClass("error");
            return false;
        }
        // Nếu tên hợp lệ, thêm dấu tích và loại bỏ lớp lỗi
        tb_ten.html("<span id='tickSymbol'>&#10004;</span>");
        tb_ten.removeClass("error");
        return true;
    }
    ten.blur(KiemtraTen);

    var Email = $("#Email");
    var tb_email = $("#tb_email");
    function KiemTraEmail() {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(Email.val() == ""){
            tb_email.html("* Không được để trống");
            tb_email.addClass("error");
            return false;
        }
        if(!re.test(Email.val())){
            tb_email.html("Vui lòng nhập địa chỉ email hợp lệ!");
            tb_email.addClass("error");
            return false;
        }
        tb_email.html("<span id='tickSymbol'>&#10004;</span>");
        tb_email.removeClass("error");
        return true;
    }
    Email.blur(KiemTraEmail);

    var SDT = $("#SDT");
    var tb_dt = $("#tb_dt");
    function KiemTraDienThoai() {
        var re = /^[0-9]{10}$/;
        if(SDT.val() == ""){
            tb_dt.html("* Không được để trống");
            tb_dt.addClass("error");
            return false;
        }
        if(!re.test(SDT.val())){
            tb_dt.html("Vui lòng nhập số điện thoại hợp lệ!");
            tb_dt.addClass("error");
            return false;
        }
        tb_dt.html("<span id='tickSymbol'>&#10004;</span>");
        tb_dt.removeClass("error");
        return true;
    }
    SDT.blur(KiemTraDienThoai);
    
});
