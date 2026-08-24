from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class UserManager(BaseUserManager):

    def create_user(self, email, full_name, phone, password=None, is_admin=False):
        if not email:
            raise ValueError("Users must have an email")

        user = self.model(
            email=self.normalize_email(email),
            full_name=full_name,
            phone=phone,
            is_admin=is_admin,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, full_name, phone, password=None):
        user = self.create_user(
            email=email,
            full_name=full_name,
            phone=phone,
            password=password,
            is_admin=True,
        )

        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10, unique=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name', 'phone']

    objects = UserManager()

    def __str__(self):
        return self.full_name

    @property
    def is_staff(self):
        return self.is_admin