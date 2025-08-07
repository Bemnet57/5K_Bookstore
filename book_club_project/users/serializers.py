from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [ 'full_name', 'email', 'phone','is_admin', 'password' ]
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def create(self, validated_data):
        return User.objects.create_user(
            email = validated_data['email'],
            full_name = validated_data['full_name'],
            phone = validated_data['phone'],
            password = validated_data['password'],
            is_admin = validated_data.get('is_admin', False)
        )