$(document).ready(function(){
    var i=1;
    var txtTen = $("#txtTen");
    var tbTen = $("#tbTen");
    function KiemtraTen() {
        var re = /^[a-zA-Z\s]{2,50}$/;
        if (txtTen.val() == "") {
            tbTen.html("* Không được để trống");
            tbTen.addClass("error");
            return false;
        }
        if (!re.test(txtTen.val())) {
            tbTen.html("* Vui lòng nhập tên hợp lệ (tối thiểu 2 ký tự, không chứa ký tự đặc biệt)");
            tbTen.addClass("error");
            return false;
        }
        // Nếu tên hợp lệ, thêm dấu tích và loại bỏ lớp lỗi
        tbTen.html("<span id='tickSymbol'>&#10004;</span>");
        tbTen.removeClass("error");
        return true;
    }
    txtTen.blur(KiemtraTen);

    var txtMail = $("#txtMail");
    var tbMail = $("#tbMail");
    function KiemTraEmail() {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(txtMail.val() == ""){
            tbMail.html("* Không được để trống");
            tbMail.addClass("error");
            return false;
        }
        if(!re.test(txtMail.val())){
            tbMail.html("Vui lòng nhập địa chỉ email hợp lệ!");
            tbMail.addClass("error");
            return false;
        }
        tbMail.html("<span id='tickSymbol'>&#10004;</span>");
        tbMail.removeClass("error");
        return true;
    }
    txtMail.blur(KiemTraEmail);

    var txtMK = $("#txtMK");
    var tbMK = $("#tbMK");
    function KiemTraMatKhau() {
        var re = /^.{6,20}$/;
        if(txtMK.val() == ""){
            tbMK.html("* Không được để trống");
            tbMK.addClass("error");
            return false;
        }
        if(!re.test(txtMK.val())){
            tbMK.html("Mật khẩu phải có độ dài từ 6 đến 20 kí tự");
            tbMK.addClass("error");
            return false;
        }
        tbMK.html("<span id='tickSymbol'>&#10004;</span>");
        tbMK.removeClass("error");
        return true;
    }
    txtMK.blur(KiemTraMatKhau);
});
