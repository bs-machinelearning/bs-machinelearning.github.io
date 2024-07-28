import os
# for i, file in enumerate(os.listdir("./assets/img/clients")):
#     source = f"./assets/img/clients/{file}"
#     target = f"./assets/img/clients/client-{i+1}.jpg"
#     os.rename(src=source, dst=target)


for i in range(1, 15):
    print(f'''
          <div class="col-xl-2 col-md-3 col-6 client-logo">
            <img src="assets/img/clients/client-{i}.jpg" class="img-fluid" alt="">
          </div><!-- End Client Item -->
          ''')