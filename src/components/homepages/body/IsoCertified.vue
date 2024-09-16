<template>
    <div class="certified-box p-[24px_18px]">
        <div class="iso-container borderYB45 flex items-center">
            <div class="text-box w-auto ">
                <div class="title text-headline4 font-700 text-[var(--Darker-0)]">ISO/IEC 27001 CERTIFIED</div>
                <hr class="my-[24px]">
                <div class="Information flex flex-col items-start justify-center  gap-[16px]">
                    <div class="text-label2 font-500 text-[var(--Darker-1)]">Information security management system applied
                        to Creden eSign Managed by Creden Asia Co., Ltd.</div>
                    <div class=" certified text-title3 font-600 text-[var(--Darker-2)]">
                        Certified by BSI
                    </div>
                </div>
            </div>
            <img :src="iosBanner" alt="iosBanner">
        </div>
    </div>
</template>
<script setup>
import iosBanner from "@/../public/images/ISO/iso-cretified.jpg";

</script>
<style scoped>
.iso-container>img {
    width: 260px;
    height: 121.512px;
    border: red;
}

.iso-container {
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
    align-items: center;
    gap: 24px;
    
}


/* Tablet */
@media (min-width: 428px) {
    .certified-box {
        padding: 40px 33px;
    }

    .iso-container {
        flex-direction: row;
        padding: 16px;
        gap: 16px;
        justify-content: space-around;
    }

    hr {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .title {
        font-size: var(--txt-headline3-size);
        font-weight: var(--txt-headline-weight);
    }

    .Information {
        font-size: var(--txt-label3-size);
        font-weight: var(--txt-label-weight);
    }

    .certified {
        font-size: var(--txt-title4-size);
        font-weight: var(--txt-title-weight);
    }

    .iso-container>img {
        width: 260px;
        height: 121.512px;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }
}

/* PC */
@media (min-width: 1024px){
    .certified-box {
        padding: 40px 96px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .iso-container {
        flex-direction: row;
        padding: 16px 24px;
        gap: 24px;
        justify-content: space-between;
        width: 1000px;

    }

    hr {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .title {
        font-size: var(--txt-headline1-size);
        font-weight: var(--txt-headline-weight);
    }

    .Information {
        font-size: var(--txt-label2-size);
        font-weight: var(--txt-label-weight);
        width: 500px;
        height: auto;
    }

    .certified {
        font-size: var(--txt-title3-size);
        font-weight: var(--txt-title-weight);
    }

    .iso-container>img {
        width: 260px;
        height: 121.512px;
        max-width: 100%;
        object-fit: contain;
    }

    .text-box {
        width: 1104px;
    }


}
</style>