
import openai
#计算 向量间的相似度
from openai.embeddings_utils import get_embeddings,get_embedding, cosine_similarity
# 调用openai 的接口 准备好50条数据
openai.api_key="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"
embedding_model = "text-embedding-ada-002"

product_embedding = get_embedding("手机",engine=embedding_model)

product_embedding2 = get_embedding("华为",engine=embedding_model)

product_embedding3 = get_embedding("小米",engine=embedding_model)
print(product_embedding,product_embedding2,product_embedding3)
similarity = cosine_similarity(product_embedding,product_embedding)
similarity2 = cosine_similarity(product_embedding,product_embedding2)
similarity3 = cosine_similarity(product_embedding,product_embedding3)
print(similarity,similarity2,similarity3)