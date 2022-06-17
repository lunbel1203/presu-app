import swal from 'sweetalert';

const useAlert = (title, text, icon, textButton) => {
    swal({
        title: title,
        text: text,
        icon: icon,
        button: textButton,
        showConfirmButton: false,
        html: true,
        customClass: 'bg-blue-600'
    });
}

export default useAlert;