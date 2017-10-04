import React from "react"

const dateTimePicker =() =>{ 

return(
<div className="container">
    <div className="row">
        <div className='col-sm-6'>
            <div className="form-group">
                <div className='input-group date' id='datetimepicker1'>
                    <input type='text' className="form-control" />
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default dateTimePicker