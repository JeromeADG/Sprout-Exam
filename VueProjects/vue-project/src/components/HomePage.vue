<template>
    <div>
        <div class="header">
            <header>
                <h1>Sprout Employee Portal: Login</h1>
            </header>
        </div>

        <div class="body">
            <div>
                <h2 class="table-title">Contractual Employees</h2>

                <form v-if="!editingIndexContractual && !editingIndexRegular" @submit.prevent="addEmployee('Contractual')">
                    <input type="text" v-model="ContNewEmployee.firstName" placeholder="First Name" required>
                    <input type="text" v-model="ContNewEmployee.lastName" placeholder="Last Name" required>
                    <input type="email" v-model="ContNewEmployee.email" placeholder="Email" required>
                    <input type="date" v-model="ContNewEmployee.contractEndDate" required>
                    <input type="text" v-model="ContNewEmployee.project" placeholder="Project" required>
                    <button type="submit">Add Employee</button>
                </form>

                <form v-else-if="editingIndexContractual !== null" @submit.prevent="updateEmployee('Contractual', editingIndexContractual)">
                    <input type="text" v-model="contractualEmployees[editingIndexContractual].firstName" placeholder="First Name" required>
                    <input type="text" v-model="contractualEmployees[editingIndexContractual].lastName" placeholder="Last Name" required>
                    <input type="email" v-model="contractualEmployees[editingIndexContractual].email" placeholder="Email" required>
                    <input type="date" v-model="contractualEmployees[editingIndexContractual].contractEndDate" required>
                    <input type="text" v-model="contractualEmployees[editingIndexContractual].project" placeholder="Project" required>
                    <button type="submit">Confirm</button>
                    <button type="button" @click="cancelEdit('contractual')">Cancel</button>
                </form>

                <table class="table">
                    <thead class="table th">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contract End Date</th>
                            <th>Project</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee, index) in contractualEmployees" :key="'contractual-' + index">
                            <td class="table td">
                                <span v-if="index !== editingIndexContractual">{{ employee.firstName }}</span>
                                <input v-else type="text" v-model="contractualEmployees[index].firstName" required>
                            </td>
                            <td class="table td">
                                <span v-if="index !== editingIndexContractual">{{ employee.lastName }}</span>
                                <input v-else type="text" v-model="contractualEmployees[index].lastName" required>
                            </td>
                            <td class="table td">
                                <span v-if="index !== editingIndexContractual">{{ employee.email }}</span>
                                <input v-else type="email" v-model="contractualEmployees[index].email" required>
                            </td>
                            <td class="table td">
                                <span v-if="index !== editingIndexContractual">{{ employee.contractEndDate }}</span>
                                <input v-else type="date" v-model="contractualEmployees[index].contractEndDate" required>
                            </td>
                            <td class="table td">
                                <span v-if="index !== editingIndexContractual">{{ employee.project }}</span>
                                <input v-else type="text" v-model="contractualEmployees[index].project" required>
                            </td>
                            <td class="table td">
                                <button @click="editEmployee('contractual', index)" v-if="index !== editingIndexContractual">Edit</button>
                                <template v-else>
                                    <button @click="updateEmployee('contractual', index)">Confirm</button>
                                    <button @click="deleteEmployee('contractual', index)">Delete</button>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h2 class="table-title">Regular Employees</h2>

                <form v-if="!editingIndexContractual && !editingIndexRegular" @submit.prevent="addEmployee('Regular')">
                    <input type="text" v-model="RegNewEmployee.firstName" placeholder="First Name" required>
                    <input type="text" v-model="RegNewEmployee.lastName" placeholder="Last Name" required>
                    <input type="email" v-model="RegNewEmployee.email" placeholder="Email" required>
                    <input type="number" v-model="RegNewEmployee.numberOfLeaves" placeholder="Number of Leaves" required>
                    <input type="text" v-model="RegNewEmployee.benefits" placeholder="Benefits" required>
                    <button type="submit">Add Employee</button>
                </form>

                <form v-else-if="editingIndexRegular !== null" @submit.prevent="updateEmployee('regular', editingIndexRegular)">
                    <input type="text" v-model="regularEmployees[editingIndexRegular].firstName" placeholder="First Name" required>
                    <input type="text" v-model="regularEmployees[editingIndexRegular].lastName" placeholder="Last Name" required>
                    <input type="email" v-model="regularEmployees[editingIndexRegular].email" placeholder="Email" required>
                    <input type="number" v-model="regularEmployees[editingIndexRegular].numberOfLeaves" placeholder="Number of Leaves" required>
                    <input type="text" v-model="regularEmployees[editingIndexRegular].benefits" placeholder="Benefits" required>
                    <button type="submit">Confirm</button>
                    <button type="button" @click="cancelEdit('regular')">Cancel</button>
                </form>

                <table class="table">
                    <thead class="table th">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Number of Leaves</th>
                            <th>Benefits</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee, index) in regularEmployees" :key="'regular-' + index">
                            <td class="table td">
                                <span v-if="index !== editingIndexRegular">{{ employee.firstName }}</span>
                                <input v-else type="text" v-model="regularEmployees[index].firstName" required>
                            </td>
                            <td class="table td">
                                <span v-if="index !== editingIndexRegular">{{ employee.lastName }}</span>
                                <input v-else type="text" v-model="regularEmployees[index].lastName" required>
                            </td>
                            <td class="table td">
                                <span v-if="index !== editingIndexRegular">{{ employee.email }}</span>
                                <input v-else type="email" v-model="regularEmployees[index].email" required>
                            </td>
                            <td class="table td">
                                <span v-if="index !== editingIndexRegular">{{ employee.numberOfLeaves }}</span>
                                <input v-else type="number" v-model="regularEmployees[index].numberOfLeaves" required>
                            </td>
                            <td class="table td">
                                <span v-if="index !== editingIndexRegular">{{ employee.benefits }}</span>
                                <input v-else type="text" v-model="regularEmployees[index].benefits" required>
                            </td>
                            <td class="table td">
                                <button @click="editEmployee('regular', index)" v-if="index !== editingIndexRegular">Edit</button>
                                <template v-else>
                                    <button @click="updateEmployee('regular', index)">Confirm</button>
                                    <button @click="deleteEmployee('regular', index)">Delete</button>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="footer">
            <footer>
                <h3 class="footer-content">Made by Jerome De Guzman</h3>
                    <div class="socials">
                        <a href="mailto:jerome.deguzman8@gmail.com" target="_blank"><img src="C:\Users\jerom\OneDrive\Documents\VueProjects\vue-project\src\images\gmail.png" alt="Gmail Icon" class="gmail-icon"></a>
                        <a href="https://www.linkedin.com/in/jerome-de-guzman-115b31288/" target="_blank"><img src="C:\Users\jerom\OneDrive\Documents\VueProjects\vue-project\src\images\linkedin.png" alt="LinkedIn Icon" class="linkedin-icon"></a>
                    </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            employees: [],
            ContNewEmployee: {
                firstName: '',
                lastName: '',
                email: '',
                contractEndDate: '',
                project: '',
                employmentType: 'Contractual'
            },
            RegNewEmployee: {
                firstName: '',
                lastName: '',
                email: '',
                numberOfLeaves: '',
                benefits: '',
                employmentType: 'Regular'
            },
            editingIndexContractual: null,
            editingIndexRegular: null
        };
    },
    computed: {
        contractualEmployees() {
            return this.employees.filter(employee => employee.employmentType === 'Contractual');
        },
        regularEmployees() {
            return this.employees.filter(employee => employee.employmentType === 'Regular');
        }
    },
    methods: {
        addEmployee(type) {
            if (type === 'Contractual') {
                this.employees.push({ ...this.ContNewEmployee });
                this.clearForm('Contractual');
            } else if (type === 'Regular') {
                this.employees.push({ ...this.RegNewEmployee });
                this.clearForm('Regular');
            }
        },
        deleteEmployee(type, index) {
            if (type === 'contractual') {
                this.contractualEmployees.splice(index, 1);
                this.editingIndexContractual = null;
            } else if (type === 'regular') {
                this.regularEmployees.splice(index, 1);
                this.editingIndexRegular = null;
            }
        },
        editEmployee(type, index) {
            if (type === 'contractual') {
                this.editingIndexContractual = index;
            } else if (type === 'regular') {
                this.editingIndexRegular = index;
            }
        },
        cancelEdit(type) {
            if (type === 'contractual') {
                this.editingIndexContractual = null;
            } else if (type === 'regular') {
                this.editingIndexRegular = null;
            }
        },
        updateEmployee(type, index) {
            if (type === 'contractual') {
                this.editingIndexContractual = null;
            } else if (type === 'regular') {
                this.editingIndexRegular = null;
            }
        },
        clearForm(type) {
            if (type === 'Contractual') {
                this.ContNewEmployee.firstName = '';
                this.ContNewEmployee.lastName = '';
                this.ContNewEmployee.email = '';
                this.ContNewEmployee.contractEndDate = '';
                this.ContNewEmployee.project = '';
                this.ContNewEmployee.employmentType = 'Contractual';
            } else if (type === 'Regular') {
                this.RegNewEmployee.firstName = '';
                this.RegNewEmployee.lastName = '';
                this.RegNewEmployee.email = '';
                this.RegNewEmployee.numberOfLeaves = '';
                this.RegNewEmployee.benefits = '';
                this.RegNewEmployee.employmentType = 'Regular';
            }
        }
    }
};
</script>




<style scoped>
* 
{
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}


.header {
    min-height: 10vh;
    background-image: url("../src/images/asfalt-light.png");
    background-color: rgb(17, 75, 31);
    display: grid;
    text-align: center;
    text-shadow: 0px 0px 12px #FFFFFF;
}


.body {
    width: 100%;
    min-height: 82vh;
    background-color: rgb(207, 203, 179);
    display: grid;
    align-items: center;
    justify-items: center;
}


.footer {
    width: 100%;
    min-height: 8vh;
    background-color: rgb(123, 172, 111);
    display: grid;
    align-items: center;
    justify-items: center;
}


.table {
    width: 1000px;
    border-collapse: collapse;
    text-align: center;
    align-items: center;
    justify-items: center;
}


.table-title{
    text-align: center;
    align-items: center;
    justify-items: center;
}


.table th,
.table td {
    border: 1px solid #000000;
    padding: 10px;
}


.table th {
    background-color: #f2f2f2;
}



.footer-content {
    display: inline-block;
    vertical-align: middle;
    margin-top: 0px;
}

.socials {
    display: inline-block;
    margin-left: 10px;
}

.gmail-icon,
.linkedin-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
}
</style>