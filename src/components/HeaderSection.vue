<template>
    <section id="header">
            <div class="wrap">
                <div class="line">
                <div class="left">
                    <div class="content">
                    <span class="spanSlow">Doris Liu</span>
                    </div>
                </div><!--
                --><div class="right">
                    <div class="content">
                    <span class="spanSlow">Doris Liu</span>
                    </div>
                </div>
                </div>
                <div class="line">
                <div class="left">
                    <div class="content">
                    <span class="spanSlow">A front-end engineer</span>
                    </div>
                </div><!--
                --><div class="right">
                    <div class="content">
                    <span class="spanSlow">A front-end engineer</span>
                    </div>
                </div>
                </div>
                <div class="line">
                    <div class="left">
                        <div class="content">
                        <span class="spanFast">With UIUX capabilities,</span>
                        </div>
                    </div><!--
                    --><div class="right">
                        <div class="content">
                        <span class="spanFast">With UIUX capabilities,</span>
                        </div>
                    </div>
                    </div>
                    <div class="line">
                        <div class="left">
                        <div class="content">
                            <span class="spanSlow">create a better user experience.</span>
                        </div>
                        </div><!--
                        --><div class="right">
                        <div class="content">
                            <span class="spanSlow">create a better user experience.</span>
                        </div>
                        </div>
                    </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'HeaderSection',
    mounted() {
        // 追踪鼠標移動
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleWindowResize);

        const spansSlow = document.querySelectorAll(".spanSlow");
        const spansFast = document.querySelectorAll(".spanFast");

        let width = window.innerWidth;

        function handleMouseMove(e) {
            let normalizedPosition = e.pageX / (width / 2) - 1;
            let speedSlow = 100 * normalizedPosition;
            let speedFast = 200 * normalizedPosition;
            spansSlow.forEach((span) => {
                span.style.transform = `translate(${speedSlow}px)`;
            });
            spansFast.forEach((span) => {
                span.style.transform = `translate(${speedFast}px)`;
            });
        }

        // 重新計算窗口寬度
        function handleWindowResize() {
            width = window.innerWidth;
        }
    }
}
</script>
