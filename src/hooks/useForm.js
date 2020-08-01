import {useState} from "react";

function useForm(initial) {
    /* STATE */
    const [formData, setValue] = useState(initial);

    /* HANDLE - Descobre o name - value.target.getAttribute('name')*/
    function handleChange(value) {
        changeValue(value.target.getAttribute('name'), value.target.value);
    }

    /* FUNCTION */
    function changeValue(key, newValue) {
        setValue({...formData, [key]: newValue});
    }

    function clearForm() {
        setValue(initial);
    }

    return {
        formData,
        handleChange,
        clearForm
    }
}

export default useForm;