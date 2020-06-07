# k8s-helm-skaffold-demo
This demo consists of a minimal client-server **Kubernetes application**. 
The front-end is in **React (Javascript)**, and the back-end is in **Cherrypy (Python)**.
It can be packaged in a **Helm chart**.
And, continuously deployed, during development, using **Skaffold**.

### Pre-requisites
You need to have [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/), [Docker](https://docs.docker.com), [Minikube](https://github.com/kubernetes/minikube), [Helm](https://github.com/helm/helm) and [Skaffold](https://github.com/GoogleContainerTools/skaffold) installed.

### Installation
- To **build** the demo (build docker images and package the helm chart) : ```.\gradlew buildApp```
- To **build and deploy** the demo into a Kubernetes cluster: ```.\gradlew deployApp```
- To **continuously deploy** the demo: ```skaffold dev```

### Demo
To access the application: 
- **Front-end**: ```http://\<hostname\>/client```
- **Backend**: ```http://\<hostname\>/server```

![K8s Demo Web App](https://github.com/LeonardoCoelho71950/k8s-demo/blob/master/docs/k8s-demo-app.png "K8s Demo Web App")

### Kubernetes Architecture
- Client and Server are running in different Docker **containers**, inside a single **pod**.
- A **service** is exposing the **pod** inside the Kubernetes cluster.
- The **ingress** allows access to the **service** from outside the Kubernetes cluster.

![K8s Demo Architecture](https://github.com/LeonardoCoelho71950/k8s-demo/blob/master/docs/k8s-demo-arch.png "K8s Demo Architecture")

## Authors:
- Leonardo Coelho	- <leonardo.coelho@ua.pt>