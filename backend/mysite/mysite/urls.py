from django.conf.urls import include, url
from django.contrib import admin
from applications.api.v1.routes import api_router
from django.views.generic.base import TemplateView

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    # API:V1
    url(r'^api/v1/', include(api_router.urls)),
    url(r'^$', TemplateView.as_view(template_name="app/index.html"), name='index'),
]
