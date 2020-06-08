# k8s-helm-skaffold-demo
This demo consists of a minimal client-server **Kubernetes application**. 
The front-end is in **React (Javascript)**, and the back-end is in **Cherrypy (Python)**.
It can be packaged in a **Helm chart**.
Also, it can be continuously deployed at development time using **Skaffold**.

### Pre-requisites
You need to have [Docker](https://docs.docker.com), [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/), [Minikube](https://github.com/kubernetes/minikube), [NGINX Ingress Controller](https://docs.nginx.com/nginx-ingress-controller/installation/installation-with-helm/), [Helm](https://github.com/helm/helm), and [Skaffold](https://github.com/GoogleContainerTools/skaffold) installed.

### Installation
- To **build** the demo (build docker images and package the helm chart) : ```.\gradlew buildApp```
- To **build and deploy** into a Kubernetes cluster: ```.\gradlew deployApp```
- To **continuously deploy** for development: ```skaffold dev```

### Project Structure
<pre>
|-- client/
|   |-- src/: front-end source code.
|   |-- <b>Dockerfile: front-end Docker image recipe.</b>
|   |-- build.gradle: build Docker image task.
|   |-- package.json: project metadata.
|-- server/
|   |-- src/: back-end source code.
|   |-- <b>Dockerfile: back-end Docker image recipe.</b>
|   |-- build.gradle: build Docker image task.
|   |-- requirements.txt: list of dependencies.
|-- helm/
|   |-- chart/
|   |   |-- <b>templates/: parameterizable Kubernetes objects.</b>
|   |   |-- Chart.yaml: name and version information.
|   |   |-- <b>values.yaml: values to feed the templates.</b>
|   |-- build.gradle: helm chart package task.
|-- build.gradle: build and deploy tasks.
|-- settings.gradle
|-- <b>skaffold.yaml: for continuous deployment at development time.</b>
</pre>

### Kubernetes Architecture
- Client and Server are running in different Docker **containers**, inside a single **pod**.
- A **service** is exposing the **pod** inside the Kubernetes cluster.
- The **ingress** allows access to the **service** from outside the Kubernetes cluster.

![K8s Demo Architecture](https://github.com/LeonardoCoelho71950/k8s-demo/blob/master/docs/k8s-demo-arch.png "K8s Demo Architecture")

### Demo
To access the application: 
- **Front-end**: ```http://<hostname>/client```
- **Backend**: ```http://<hostname>/server```

![K8s Demo Web App](https://github.com/LeonardoCoelho71950/k8s-demo/blob/master/docs/k8s-demo-app.png "K8s Demo Web App")

## Authors:
- Leonardo Coelho	- <leonardo.coelho@ua.pt>
