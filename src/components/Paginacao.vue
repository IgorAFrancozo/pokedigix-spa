<script>
export default {
    name: "paginacao"
}
</script>
    
<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <a class="page-link text-light bg-secondary">Anterior</a>
            </li>
            <li class="page-item"><a class="page-link text-light bg-secondary" href="#">1</a></li>
            <li class="page-item"><a class="page-link text-light bg-secondary" href="#">2</a></li>
            <li class="page-item"><a class="page-link text-light bg-secondary" href="#">3</a></li>
            <li class="page-item"><a class="page-link text-light bg-secondary" href="#">4</a></li>
            <li class="page-item">
                <a class="page-link text-light bg-secondary" href="#">Próximo</a>
            </li>
        </ul>
    </nav>
</template>