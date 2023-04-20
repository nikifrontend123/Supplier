<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
        <div class="container my-3">
            <RouterLink to="/AddInvoice">
                <div class="btn btn-warning w-100 fw-semibold">
                    Add Invoice
                </div>
            </RouterLink>
            <div class="form my-3">
                <select class="form-select" id="Select" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Pending Bills</option>
                    <option value="2">Cancele Bills</option>
                    <option value="3">Party Paid Bills</option>
                    <option value="3">Cleared Bills</option>
                </select>
            </div>
        </div>
        <div class="search d-flex  d-flex justify-content-between align-items-center w-100">
            <div class="inp ms-3">
                <input type="search" placeholder="Search">
            </div>

            <p class="m-0">
            <div class="btn btn-primary">Reset</div>
            <button type="button" class="btn btn-primary " data-bs-toggle="collapse"
                data-bs-target="#myCollapse">Filters</button>
            </p>
        </div>
        <!-- Collapsible Element HTML -->
        <div class="collapse  mt-2" id="myCollapse">
            <div class="card card-body">
                <div class="first d-flex">
                    <TextInputs name="Start Date" type="date" design="floating" />
                    <TextInputs name="End Date" type="date" design="floating" />
                </div>
                <TextInputs name="Filter By Colour" type="text" design="floating" />
                <TextInputs name="Filter By Fabric" type="text" design="floating" />
                <div class="first d-flex">
                    <TextInputs name="Per Meter/KG Price Starts" type="date" design="floating" />
                    <TextInputs name="Per Meter/KG Price End" type="date" design="floating" />
                </div>
                <TextInputs name="Filter By Processings" type="text" design="floating" />
                <TextInputs name="Sort Purchase By" type="text" design="floating" />

            </div>
        </div>
        <div class="container">
            <div v-for="receipt in receipts" class="box border border-1 mt-3 container py-3">
                <div class="first d-flex justify-content-between w-100">
                    <div class="txt d-flex  fw-semibold ">
                        <p class="m-0">Invoice No.{{ receipt.txt1 }}</p>
                    </div>
                </div>
                <div class="txt d-flex  fw-semibold ">
                    <p class="m-0">{{ receipt.price }}/Incl GST.</p>
                </div>
                <div class="sec mt-3">
                    <p class="m-0">{{ receipt.txt2 }}</p>
                    <p class="m-0">{{ receipt.txt3 }}</p>

                    <p class="m-0">{{ receipt.txt5 }}</p>
                </div>
                <div class="fourth mt-3">
                    <img :src="receipt.img" alt="" class="w-100">
                </div>
                <div class="fifth bg-success m-3 p-1">
                    <p class="m-0">Amount</p>
                    <p class="m-0">Txn ID.</p>
                    <p class="m-0">Partly Payment</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';

export default {
    components: {
        TextInputs,
    },
    computed: {
        receipts() {
            return this.$store.getters.getReceipts;
        }
    }
}
</script>

<style lang="scss" scoped></style>