function onSubmit() {
    var startValue = g_form.getValue('start_date')
    var endValue = g_form.getValue('end_date')

    if (!startValue || !endValue) {
        return true
    }

    var start = new Date(startValue)
    var end = new Date(endValue)

    if (start >= end) {
        g_form.addErrorMessage('Start Date must be before End Date.')
        g_form.showFieldMsg('start_date', 'Start Date must be before End Date.', 'error')
        g_form.showFieldMsg('end_date', 'End Date must be after Start Date.', 'error')
        return false
    }

    return true
}
