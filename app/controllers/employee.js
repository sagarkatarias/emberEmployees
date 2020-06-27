import Controller from '@ember/controller';
import { reads } from '@ember/object/computed';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Controller.extend({
    employees: reads('model'),

    table: computed('employees', function () {
        const data = this.employees;
        const employees = data.split(/\r?\n|\r/);
        const employeeArray = employees.map((row) => row.split(','));
        const lastItem = employeeArray[employeeArray.length - 1];
        if (isEmpty(lastItem[0])) {
            employeeArray.pop();
            return employeeArray;
        }
        return employeeArray;
    }),

    actions: {
        scrollTop() {
            window.scrollTo(0, 0);
        }
    }
});
