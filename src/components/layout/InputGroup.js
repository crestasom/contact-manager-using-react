import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

const InputGroup = ({ lblName, name, type, onChange, placeHolder, defValue, error }) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="name">{lblName}</label>
                <input
                    id={name}
                    type={type}
                    name={name}
                    onChange={onChange}
                    placeholder={placeHolder}
                    value={defValue}
                    className={classnames("form-control form-control-lg", { 'is-invalid': error })} />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    lblName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string.isRequired,
    defValue: PropTypes.string.isRequired,
    error: PropTypes.string
};

InputGroup.defaultProps = {
    type: "text"
}
export default InputGroup;