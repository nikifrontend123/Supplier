<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
        <div class="first text-center p-2 mt-2" style="background-color: #B7B7B7;">
            <b>Select PO Number</b>
        </div>
        <div class="box p-2 mb-2">
            <div class="form ">
                <select style="background-color: #DAF5FF;" class="form-select" id="Select"
                    aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">PO No. 2023/1088</option>
                    <option value="1">PO No. 2023/1088</option>
                    <option value="1">PO No. 2023/1088</option>
                    <option value="1">PO No. 2023/1088</option>
                    <option value="1">PO No. 2023/1088</option>
                    <option value="1">PO No. 2023/1088</option>
                </select>
            </div>
        </div>
        <div class="container">
            <div class="box border border-3 mt-3 container py-3">
                <div class="first  w-100">
                    <div class="txt">
                        <p class="m-0">Fabric 1 Name</p>
                        <p class="m-0">PO No. 2023/1088</p>
                        <p class="m-0">{02/04/2024 & 18:30}</p>
                    </div>
                </div>
                <div class="img mt-2">
                    <img src="../../assets/cotton.jpg" width="100%" alt="">
                </div>
            </div>
            <div class="date d-flex justify-content-between px-5 mt-3">
                <span>Date</span> <input type="date">
            </div>
            <div class="date d-flex justify-content-between px-5 mt-3">
                <span>Amount</span> <input type="text">
            </div>
            <div class="date d-flex justify-content-between px-5 mt-3">
                <input type="file">
            </div>
            <div class="btnbtn d-flex justify-content-center mt-4">
            <div class="btn btn-warning">Submit</div>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>