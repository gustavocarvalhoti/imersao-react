import React from 'react';

function FormField({value, onChange, name, label, type = 'input', typeInput = 'text'}) {
    return (
        <div>
            <label>
                {label}:
                <br/>
                {
                    type === 'input'
                        ?
                        <input
                            name={[name]}
                            type={[typeInput]}
                            value={value}
                            onChange={onChange}
                        />
                        : <textarea
                            name={[name]}
                            type={[typeInput]}
                            value={value}
                            onChange={onChange}
                        />
                }
            </label>
        </div>
    );
}

export default FormField;
