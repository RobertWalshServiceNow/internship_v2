import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['internship-date-validation'],
    name: 'Validate Start Date Before End Date',
    table: 'sn_internship_pl_0_internship',
    type: 'onSubmit',
    uiType: 'all',
    script: Now.include('../../client/internship-date-validation.js'),
})
