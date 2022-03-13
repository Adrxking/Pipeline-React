node {
    def commit_id
    def previous_id
    stage('Preparacion') {
        checkout scm
        // Save actual id commit on file
        sh "git rev-parse --short HEAD > .git/commit-id"
        // Read actual id commit
        commit_id = readFile('.git/commit-id').trim()
        // Check if previous id commit exists
        sh "if (test ! -f .git/previous-id); then echo '' > .git/previous-id; fi"
        // Read previous id commit
        previous_id = readFile('.git/previous-id').trim()
    }
    stage('Build y Push a DockerHub') {
        // Build and push the image
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
            def app = docker.build("adrxking/docker-react:${commit_id}", '.').push()
        }
        // Save previous id commit on file
        sh "echo ${commit_id} > .git/previous-id"
        // Delete image
        sh "docker rmi adrxking/docker-react:${commit_id}"
    }
    stage('Correr contenedor') {
        // save image to constraint
        def cont = docker.image("adrxking/docker-react:${commit_id}")
        // Download image
        cont.pull()
        // Delete container if exists with same name
        sh "docker stop graphql-prisma-react || true && docker rm graphql-prisma-react || true"
        // Run container
        sh "docker run -d --restart always -p 5434:80 -u root:root --name graphql-prisma-react adrxking/docker-react:${commit_id}"
    } 
}
