$(document).ready(function(){
    var kh_ten = $("#kh_ten");
    var tb_ten = $("#tb_ten");
    function KiemtraTen() {
        var re = /^[a-zA-Z\s]+$/;
        if (kh_ten.val() == "") {
            tb_ten.html("* Không được để trống");
            tb_ten.addClass("error");
            return false;
        }
        if (!re.test(kh_ten.val())) {
            tb_ten.html("* Vui lòng nhập tên hợp lệ (Chỉ chấp nhận chữ cái và khoảng trống)");
            tb_ten.addClass("error");
            return false;
        }
        // Nếu tên hợp lệ, thêm dấu tích và loại bỏ lớp lỗi
        tb_ten.html("<span id='tickSymbol'>&#10004;</span>");
        tb_ten.removeClass("error");
        return true;
    }
    kh_ten.blur(KiemtraTen);

    var kh_email = $("#kh_email");
    var tb_email = $("#tb_email");
    function KiemTraEmail() {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(kh_email.val() == ""){
            tb_email.html("* Không được để trống");
            tb_email.addClass("error");
            return false;
        }
        if(!re.test(kh_email.val())){
            tb_email.html("Vui lòng nhập địa chỉ email hợp lệ!");
            tb_email.addClass("error");
            return false;
        }
        tb_email.html("<span id='tickSymbol'>&#10004;</span>");
        tb_email.removeClass("error");
        return true;
    }
    kh_email.blur(KiemTraEmail);

    var kh_diachi = $("#kh_diachi");
    var tb_diachi = $("#tb_diachi");
    function KiemTraDiaChi() { 
        if(kh_diachi.val() == ""){
            tb_diachi.html("* Không được để trống");
            tb_diachi.addClass("error");
            return false;
        }
        tb_diachi.html("<span id='tickSymbol'>&#10004;</span>");
        tb_diachi.removeClass("error");
        return true;
    }
    kh_diachi.blur(KiemTraDiaChi);

    var kh_dienthoai = $("#kh_dienthoai");
    var tb_dt = $("#tb_dt");
    function KiemTraDienThoai() {
        var re = /^[0-9]{10}$/;
        if(kh_dienthoai.val() == ""){
            tb_dt.html("* Không được để trống");
            tb_dt.addClass("error");
            return false;
        }
        if(!re.test(kh_dienthoai.val())){
            tb_dt.html("Vui lòng nhập số điện thoại hợp lệ!");
            tb_dt.addClass("error");
            return false;
        }
        tb_dt.html("<span id='tickSymbol'>&#10004;</span>");
        tb_dt.removeClass("error");
        return true;
    }
    kh_dienthoai.blur(KiemTraDienThoai);
    
});
